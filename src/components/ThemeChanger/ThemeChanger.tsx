import { ChangeEventHandler, useContext } from "react";
import classes from "./ThemeChanger.module.scss";
import { ThemeContext, ThemeOption } from "../../context/Theme/ThemeProvider";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTheme(event.target.value as ThemeOption);

  return (
    <div className={classes.container}>
      <p>Тeмная тема</p>
      <label id="switch" className={classes.switch} htmlFor="darkTheme">
        <input
          className={classes.slider}
          checked={theme === ThemeOption.dark}
          type="checkbox"
          name="theme"
          id="darkTheme"
          value={ThemeOption.dark}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ThemeChanger;
