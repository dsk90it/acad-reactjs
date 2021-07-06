import Card from "../ui/card";
import MeetupItemStyles from "./meetup-item.module.css";

const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className={MeetupItemStyles.item}>
      <Card>
        <div className={MeetupItemStyles.image}>
          <img src={image} alt={title} />
        </div>

        <div className={MeetupItemStyles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>

        <div className={MeetupItemStyles.actions}>
          <button type="button">To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
