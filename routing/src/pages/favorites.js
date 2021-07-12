import { useContext } from "react";
import MeetupList from "../components/meetups/meetup-list";
import FavoriteContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <section>
      <h1>Favorites Page</h1>

      {favoritesCtx.totalFavorites === 0 ? (
        <p>You got no favorites. Start adding some?</p>
      ) : (
        <MeetupList listItems={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
