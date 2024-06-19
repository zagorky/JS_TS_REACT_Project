import { useQuery } from "@tanstack/react-query";
import classes from "./RandomAnime.module.scss";
import { FC } from "react";
import { getRandomAnime } from "../service/Api";

const RandomAnime: FC = () => {
  const { data, isError, isLoading, refetch, error } = useQuery({
    queryKey: ["randomAnime"],
    queryFn: getRandomAnime,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError) {
    return (
      <div>
        <h2>Ошибка при загрузке данных</h2>
        <p>{(error as Error).message}</p>
        <button className={classes.btn} onClick={() => refetch()}>
          Искать аниме
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        {data && (
          <div>
            <h2>{data.russian}</h2>
            <img
              src={
                `https://shikimori.one${data.image.original}` ||
                "Изображение отсутствует"
              }
              alt={data.name}
            />
            <p>
              <strong>Жанры:</strong>
              {data.genres.map((genre: any) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Описание:</strong>
              {data.description || "Описание отсутствует"}
            </p>
            {data.videos.length > 0 ? (
              <video width="320" height="240" controls>
                <source src={data.videos[0].url} type="video/mp4" />
              </video>
            ) : (
              <p>Видео отсутствует</p>
            )}
          </div>
        )}
      </div>
      <button className={classes.btn} onClick={() => refetch()}>
        Искать аниме
      </button>
    </div>
  );
};
export default RandomAnime;
