import classes from "./Button.module.scss";

export default function Button() {
   {/* повесить на баттон онклик, который 
      будет рендерить страницу заново, получая 
      с сервера рандомный индекс массива
let randomItem = array[Math.floor(Math.random() * array.length)];*/}

  return (
    <div className={classes.ButtonSection}>
                <button className={classes.btn}>Следующее</button>

      
    </div>
  );
}
