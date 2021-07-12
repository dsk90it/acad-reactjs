import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Card from "../ui/card";
import MeetupItemStyles from "./meetup-item.module.css";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favoritesCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavoritesHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        image: image,
        title: title,
        address: address,
        description: description,
      });
    }
  };

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
          <button type="button" onClick={toggleFavoritesHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
