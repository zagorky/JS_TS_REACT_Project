export interface QuestionType {
  id: string;
  name: string;
  email: string;
  question: string;
}
export type QuestionRequest = Omit<QuestionType, "id">;
