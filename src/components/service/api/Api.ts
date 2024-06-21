import axios from "axios";
import { QuestionRequest } from "../../../types/types";

const animeApi = "https://shikimori.one/api";

export interface Anime {
  id: number;
  russian: string;
  image: {
    original: string;
  };
  name: string;
  genres: [string];

  description: string;
}

export const getRandomAnime = async (): Promise<Anime> => {
  const random = Math.floor(Math.random() * 3000);

  try {
    const response = await axios.get(`${animeApi}/animes/${random}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getQuestion = async (question: QuestionRequest) => {
  const { data } = await api.post("/questions", question);
  return data;
};
