export interface QuestionType {
  id: string;
  name: string;
  email: string;
  question: string;
}
export type QuestionRequest = Omit<QuestionType, "id">;
export interface Anime {
  id?: string;
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
  duration?: string;
  screenshots?: { original: string }[];
  videos?: { url: string }[];
  description: string;
}
