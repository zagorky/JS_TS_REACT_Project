import { NavLink } from "react-router-dom";
import { RouteVar } from "../../router/constants";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <NavLink className={classes.submit} to={RouteVar.feedback} end>
          Помощь
        </NavLink>
        <NavLink className={classes.submit} to={RouteVar.home} end>
          Главная
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
