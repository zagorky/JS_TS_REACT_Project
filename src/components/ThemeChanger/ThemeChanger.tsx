import { ChangeEventHandler, useContext } from "react";
import classes from "./ThemeChanger.module.scss";
import { ThemeContext, ThemeOption } from "../../context/Theme/ThemeProvider";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTheme(event.target.value as ThemeOption);

  return (
    <div>
      <p>Тeмная тема</p>
      <label className={classes.switch} htmlFor="darkTheme">
        <input
          checked={theme === ThemeOption.dark}
          type="checkbox"
          name="theme"
          id="darkTheme"
          value={ThemeOption.dark}
          onChange={handleChange}
        />
        <span className={classes.slider}></span>
      </label>
      <p> Светлая тема</p>

      <label className={classes.switch} htmlFor="lightTheme">
        <input
          checked={theme === ThemeOption.light}
          type="checkbox"
          name="theme"
          id="lightTheme"
          value={ThemeOption.light}
          onChange={handleChange}
        />
        <span className={classes.slider}></span>
      </label>
    </div>
  );
};

export default ThemeChanger;
