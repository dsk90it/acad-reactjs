import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/meetup-form";

const NewMeetupPage = () => {
  const history = useHistory();

  // const addMeetup = (meetupData) => {
  //   fetch("https://acad-reactjs-default-rtdb.firebaseio.com/meetups.json", {
  //     method: "POST",
  //     body: JSON.stringify(meetupData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(() => {
  //     history.replace("/");
  //   });
  // };

  const addMeetup = async (meetupData) => {
    const settings = {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // const response = await
      fetch(
        "https://acad-reactjs-default-rtdb.firebaseio.com/meetups.json",
        settings
      );
      // const data = await response.json();
      // console.log(data);
      history.replace("/");
    } catch (e) {
      return e;
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
};

export default NewMeetupPage;
