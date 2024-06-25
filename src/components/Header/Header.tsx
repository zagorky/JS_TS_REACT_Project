import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { RouteVar } from "../../router/constants";

const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <NavLink to={RouteVar.home}>
          <h1>Anime Randomizer</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
