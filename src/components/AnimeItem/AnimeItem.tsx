import { useQuery } from "@tanstack/react-query";
import { Anime, getAnimeById } from "../../service/api/Api";
import { RouteVar } from "../../router/constants";
import { Link, useParams } from "react-router-dom";
import { FC } from "react";

const AnimeItem: FC<Anime> = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery<Anime, Error>({
    queryKey: ["randomAnime", id],
    queryFn: () => getAnimeById(Number(id)),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError || !data) {
    return (
      <div>
        <h2>Ошибка при загрузке данных</h2>
        <p>{(error as Error).message}</p>
        <Link to={RouteVar.home}>Назад на главную</Link>
      </div>
    );
  }
  return (
    <div>
      {data && (
        <div>
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
            {data.score || "Рейтинг отсутствует"}
          </p>
          <p>
            <strong>Похожие:</strong>
            {data.synonyms?.map((synonym) => synonym.name.join(", ")) ||
              "Информация отсутствует"}
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
            {data.videos?.[0]?.url || "Информация отсутствует"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnimeItem;
