import MeetupItem from "./meetup-item";
import MeetupListStyles from "./meetup-list.module.css";

const MeetupList = ({ listItems }) => {
  return (
    <ul className={MeetupListStyles.list}>
      {listItems.map((item) => {
        return (
          <MeetupItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            address={item.address}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
