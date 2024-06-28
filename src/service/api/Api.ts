import axios from "axios";
import { Anime, QuestionRequest } from "../../types/types";

const apiUrl = "https://shikimori.one/api";

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
});

export const getRandomAnime = async (): Promise<Anime> => {
  const random = Math.floor(Math.random() * 3000);

  try {
    const response = await api.get(`/animes/${random}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};

export const getAnimeById = async (id: string): Promise<Anime> => {
  try {
    const response = await api.get<Anime>(`/animes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};

export const myApi = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getQuestion = async (question: QuestionRequest) => {
  const { data } = await myApi.post("/questions", question);
  return data;
};
