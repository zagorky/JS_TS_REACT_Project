import { FC } from "react";
import classes from "./AnimeItem.module.scss";
import { Anime } from "../../types/types";

const AnimeItem: FC<Anime> = ({
  russian,
  image,
  name,
  genres,
  score,
  status,
  episodes,
  duration,
  videos,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.animeCard}>
        <h2>Информация об аниме "{russian}"</h2>

        <img
          src={
            `https://shikimori.one${image.original}` ||
            "Изображение отсутствует"
          }
          alt={name}
        />
        <p>
          <strong>Жанры:</strong>
          {genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Рейтинг:</strong>
          {`${score} из 10` || "Рейтинг отсутствует"}
        </p>

        <p>
          <strong>Статус:</strong>
          {status || "Информация отсутствует"}
        </p>
        <p>
          <strong>Количество эпизодов:</strong>
          {episodes || "Информация отсутствует"}
        </p>
        <p>
          <strong>Длительность:</strong>
          {duration || "Информация отсутствует"}
        </p>
        <p>
          <strong>Трейлер:</strong>
          <a
            className="animeLink"
            target="blank"
            href={
              videos && videos[0] ? videos[0].url : "Информация отсутствует"
            }
          >
            {videos && videos[0] ? videos[0].url : "Информация отсутствует"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnimeItem;
