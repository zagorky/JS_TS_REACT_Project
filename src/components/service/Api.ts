import axios from "axios";

const animeApi = "https://shikimori.one/api";
const random = Math.floor(Math.random() * 3000);

export const getRandomAnime = async () => {
  try {
    const response = await axios.get(`${animeApi}/animes/${random}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};
