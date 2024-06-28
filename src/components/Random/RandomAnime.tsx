import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getRandomAnime } from "../../service/api/Api";
import Button from "../Button/Button";
// import { RouteVar } from "../../router/constants";
import { Link } from "react-router-dom";
import { Anime } from "../../types/types";

const RandomAnime: FC = () => {
  const { data, isError, isLoading, refetch, error } = useQuery<Anime, Error>({
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
        <Button onClick={() => refetch()}> Искать аниме</Button>
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
              {data.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Описание:</strong>
              {data.description || "Описание отсутствует"}
            </p>
            <Link className="animeLink" to={`/anime/${data.id}`}>
              Побробнее
            </Link>
          </div>
        )}
      </div>
      <Button onClick={() => refetch()}> Искать аниме</Button>
    </div>
  );
};
export default RandomAnime;
