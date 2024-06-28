import { FC } from "react";
import { AnimeItem } from "../../components/componentList";
import { Anime } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import { getAnimeById } from "../../service/api/Api";
import { useQuery } from "@tanstack/react-query";
import { RouteVar } from "../../router/constants";
import classes from "./AnimePage.module.scss";

const AnimePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading, error } = useQuery<Anime, Error>({
    queryKey: ["anime", id],
    queryFn: () => getAnimeById(id as string),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className={classes.container}>
        <h2>Загрузка...</h2>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={classes.container}>
        <h2>Ошибка при загрузке данных</h2>
        <p>{error?.message}</p>
        <Link to={RouteVar.home}>Назад на главную</Link>
      </div>
    );
  }
  return (
    <div>
      <AnimeItem {...data} />
    </div>
  );
};

export default AnimePage;
