import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/meetup-form";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetup = (data) => {
    fetch("https://acad-reactjs-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
};

export default NewMeetupPage;
