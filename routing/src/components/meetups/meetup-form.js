import { useRef } from "react";
import Card from "../ui/card";
import MeetupFormStyles from "./meetup-form.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  // Refer input nodes to get their values
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const titleInputVal = titleInputRef.current.value;
    const imageInputVal = imageInputRef.current.value;
    const addressInputVal = addressInputRef.current.value;
    const descriptionInputVal = descriptionInputRef.current.value;

    const meetupFormData = {
      title: titleInputVal,
      image: imageInputVal,
      address: addressInputVal,
      description: descriptionInputVal,
    };

    onAddMeetup(meetupFormData);
  };

  return (
    <Card>
      <form className={MeetupFormStyles.form} onSubmit={handleSubmit}>
        <div className={MeetupFormStyles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>

        <div className={MeetupFormStyles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>

        <div className={MeetupFormStyles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>

        <div className={MeetupFormStyles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={MeetupFormStyles.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
