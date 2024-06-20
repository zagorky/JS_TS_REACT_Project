import Button from "../Button/Button";
import classes from "./Feedback.module.scss";

const Feedback = () => {
  return (
    <form className={classes.form}>
      <p>Ваше имя</p>
      <p className={classes.nameInput}>
        <input type="text" />
      </p>
      <p>Способ связи</p>
      <p className={classes.nameInput}>
        <input type="text" />
      </p>
      <p className={classes.questionInput}>
        <p>
          <label for="story">Ваш вопрос</label>
        </p>
        <textarea id="story" name="story"></textarea>
      </p>
      <Button>Отправить</Button>
    </form>
  );
};

export default Feedback;
