import { Link } from "react-router-dom";
import NavBarStyles from "./navbar.module.css";

const NavigationBar = () => {
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
        </li>
      </ul>
    </header>
  );
};

export default NavigationBar;
