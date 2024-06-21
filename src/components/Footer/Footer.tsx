import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import classes from "./Footer.module.scss";

function Footer() {
  const [showFeedback, setShowFeedback] = useState(false);

  const FeedbackChanger = () => {
    setShowFeedback((help) => !help);
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <button className={classes.submit} onClick={FeedbackChanger}>
          Помощь
        </button>
        {showFeedback && <Feedback />}
      </div>
    </footer>
  );
}

export default Footer;
