import classes from './Main.module.scss'

function Main () {
    return ( 
        <main>
        <div className={classes.container}>
            <div className={classes.animeCard}>
                <img src="anime.jpg" alt="Anime Poster" />
                <h2>Название аниме</h2>
                <p>Краткое описание аниме</p>
                <button className={classes.btn}>Следующее</button>
            </div>
        </div>
    </main>
     );
}

export default Main;