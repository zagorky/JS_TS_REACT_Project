export interface Question {
  id: number;
  name: string;
  email: string;
  question: string;
}
export type QuestionRequest = Omit<Question, "id" | "count">;
