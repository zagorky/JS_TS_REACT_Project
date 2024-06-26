export interface QuestionType {
  id: number;
  name: string;
  email: string;
  question: string;
}
export type QuestionRequest = Omit<
  QuestionType,
  "id" | "name" | "email" | "question"
>;
