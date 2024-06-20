import { FC } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <div className={classes.ButtonSection}>
      <button onClick={onClick} className={classes.btn}>
        {children}
      </button>
    </div>
  );
};

export default Button;
