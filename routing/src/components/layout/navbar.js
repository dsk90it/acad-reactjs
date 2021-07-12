import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context";
import NavBarStyles from "./navbar.module.css";

const NavigationBar = () => {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <header className={NavBarStyles.header}>
      <div className={NavBarStyles.logo}>React Meetups</div>

      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
          <span className={NavBarStyles.badge}>
            {favoritesCtx.totalFavorites}
          </span>
        </li>
      </ul>
    </header>
  );
};

export default NavigationBar;
