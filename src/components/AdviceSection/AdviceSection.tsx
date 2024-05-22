import Button from "../Button/Button";
import classes from "./AdviseSection.module.scss";

export default function AdviceSection() {
  return (
    <section className={classes.adviceSection}>
      <h2 className={classes.adviceId}>ADVICE # Advice ID goes here</h2>
      <p className={classes.adviceContent}>
        " Advice text goes here Advice text goes here Advice text goes here"
      </p>
      {/* desktop divider*/}
      <svg
        className={classes.desktopDivider}
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      {/* mobile divider */}
      {/* <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> */}
      <Button />
    </section>
  );
}
