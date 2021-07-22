import { SUBMIT_QUESTION, FETCH_QUESTION } from "../constants/QuestionConstant";

export const submitQuestionAction = (answerKey, questionKey, page, history) => {
  return async (dispatch) => {
    dispatch({
      type: SUBMIT_QUESTION,
      payload: { question: questionKey, answer: answerKey },
    });

    history.push(`question${page + 1}`); // đi đến trang tiếp theo tính từ trang cuối cùng
  };
};

export const fetchQuestionAction = (question) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_QUESTION,
      payload: question,
    });
  };
};
