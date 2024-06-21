import { useRef } from "react";
import classes from "./Feedback.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getQuestion } from "../service/api/Api";
import { QuestionRequest } from "../../types/types";
import Button from "../Button/Button";

const Feedback = () => {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const mutator = useMutation({
    mutationFn: getQuestion,
    onSuccess: () => {
      formRef.current?.reset();
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const dataObj = Object.fromEntries(new FormData(event.currentTarget));
    const addedData = {
      name: dataObj.name,
      email: dataObj.email,
      question: dataObj.question,
    };
    mutator.mutate(addedData as QuestionRequest);
  };

  return (
    <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
      <p>Ваше имя</p>
      <p className={classes.nameInput}>
        <input type="text" />
      </p>
      <p>Ваша электронная почта</p>
      <p className={classes.nameInput}>
        <input type="text" />
      </p>
      <p className={classes.questionInput}>
        <p>
          <label htmlFor="story">Ваш вопрос</label>
        </p>
        <textarea id="story" name="story"></textarea>
      </p>
      <Button>Отправить</Button>
    </form>
  );
};

export default Feedback;
