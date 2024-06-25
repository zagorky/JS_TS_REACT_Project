import axios from "axios";
import { QuestionRequest } from "../../types/types";

const apiUrl = "https://shikimori.one/api";

export interface Anime {
  id: number;
  russian: string;
  image: {
    original: string;
  };
  name: string;
  genres: { name: string }[];
  url?: string;
  score?: string;
  status?: string;
  episodes?: string;
  synonyms?: { name: string }[];
  duration?: number;
  screenshots?: { original: string }[];
  videos?: { url: string }[];
  description: string;
}

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
});

export const getRandomAnime = async (): Promise<Anime> => {
  const random = Math.floor(Math.random() * 1000);

  try {
    const response = await api.get(`/animes/${random}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};

export const getAnimeById = async (id: number): Promise<Anime> => {
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
