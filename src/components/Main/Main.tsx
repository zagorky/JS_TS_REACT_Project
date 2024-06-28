import { RandomAnime } from "../componentList";
import classes from "./Main.module.scss";

function Main() {
  return (
    <main>
      <div className={classes.container}>
        <div className={classes.animeCard}>
          <RandomAnime />
        </div>
      </div>
    </main>
  );
}

export default Main;
