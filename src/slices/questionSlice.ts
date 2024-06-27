import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionRequest } from "../types/types";

interface QuestionState {
  questions: QuestionRequest[];
}

const initialState: QuestionState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<QuestionRequest>) => {
      state.questions.push(action.payload);
    },
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
