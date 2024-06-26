import { useQuery } from "@tanstack/react-query";
import { Anime, getAnimeById } from "../../service/api/Api";
import { RouteVar } from "../../router/constants";
import { Link, useParams } from "react-router-dom";
import { FC } from "react";
import classes from "./AnimeItem.module.scss";

const AnimeItem: FC<Anime> = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading, error } = useQuery<Anime, Error>({
    queryKey: ["anime", id],
    queryFn: () => getAnimeById(id),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError || !data) {
    return (
      <div className={classes.container}>
        <h2>Ошибка при загрузке данных</h2>
        <p>{(error as Error).message}</p>
        <Link to={RouteVar.home}>Назад на главную</Link>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      {data && (
        <div className={classes.animeCard}>
          <h2>Информация об аниме "{data.russian}"</h2>

          <img
            src={
              `https://shikimori.one${data.image.original}` ||
              "Изображение отсутствует"
            }
            alt={data.name}
          />
          <p>
            <strong>Жанры:</strong>
            {data.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Рейтинг:</strong>
            {`${data.score} из 10` || "Рейтинг отсутствует"}
          </p>

          <p>
            <strong>Статус:</strong>
            {data.status || "Информация отсутствует"}
          </p>
          <p>
            <strong>Количество эпизодов:</strong>
            {data.episodes || "Информация отсутствует"}
          </p>
          <p>
            <strong>Длительность:</strong>
            {data.duration || "Информация отсутствует"}
          </p>
          <p>
            <strong>Трейлер:</strong>
            <a
              className="animeLink"
              target="blank"
              href={
                data.videos && data.videos[0]
                  ? data.videos[0].url
                  : "Информация отсутствует"
              }
            >
              {data.videos && data.videos[0]
                ? data.videos[0].url
                : "Информация отсутствует"}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AnimeItem;
