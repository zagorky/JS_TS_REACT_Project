import classes from "./Footer.module.scss";

function Footer() {
  return (
        <footer>
        <div className={classes.container}>
            <nav>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Помощь</a></li>
                </ul>
            </nav>
        </div>
    </footer>

  );
}

export default Footer;
