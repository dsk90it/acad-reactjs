import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/meetup-list";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://acad-reactjs-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        // destructure data
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        console.log(meetups);

        setIsLoading(false);
        setLoadedData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList listItems={loadedData} />
    </div>
  );
};

export default AllMeetupsPage;
