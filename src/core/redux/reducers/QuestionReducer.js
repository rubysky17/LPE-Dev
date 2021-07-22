// import action
import { SUBMIT_QUESTION, FETCH_QUESTION } from "../constants/QuestionConstant";

// Khởi tạo State
const initialState = {
  questions: [],
};
export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch question when user go in to page
    case FETCH_QUESTION: {
      state.questions = [...action.payload];
      return { ...state };
    }

    // SUbmit when user choose answer
    case SUBMIT_QUESTION: {
      const arrayQuestion = [...state.questions];

      const index = arrayQuestion.findIndex((ans) => {
        return ans.question === action.payload.question;
      });

      if (index === -1) {
        arrayQuestion.push(action.payload);
      } else {
        arrayQuestion[index].answer = action.payload.answer;
      }

      state.questions = arrayQuestion;
      const jsonQuestion = JSON.stringify(state.questions);

      localStorage.setItem("question", jsonQuestion);
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
