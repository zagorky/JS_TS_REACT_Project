import { useRef } from "react";
import classes from "./Feedback.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getQuestion } from "../../service/api/Api";
import { Button } from "../componentList";
import { QuestionRequest } from "../../types/types";

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
      name: dataObj.name as string,
      email: dataObj.email as string,
      question: dataObj.question as string,
    };
    mutator.mutate(addedData as QuestionRequest);
  };

  return (
    <main>
      <div className={classes.container}>
        <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
          <p>Ваше имя</p>
          <p className={classes.p}>
            <input className={classes.input} name="name" type="text" />
          </p>
          <p>Ваша электронная почта</p>
          <p className={classes.p}>
            <input className={classes.input} name="email" type="text" />
          </p>
          <p className={classes.p}>
            <p>
              <label htmlFor="story">Ваш вопрос</label>
            </p>
            <textarea
              className={classes.inputStory}
              id="story"
              name="question"
            ></textarea>
          </p>
          <Button>Отправить</Button>
        </form>
      </div>
    </main>
  );
};

export default Feedback;
