import { quizTypes } from "./quiz.types"

const triviaInitState = {
  questions: [],
  error: null,
  questionIndex: 0,
  point: 0,
  currentQuestionIndex: 0,
  isSubmitted: false,
  isSelected: false,
  userAnswer: null,
  isChecked: false,
}

export const triviaReducer = (state = triviaInitState, action) => {
  switch (action.type) {
    case quizTypes.ADD_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions,
      }
    case quizTypes.ADD_QUESTION_FAIL:
      return {
        ...state,
        error: "Something gone wrong !!!!",
      }
    case quizTypes.SELECT_QUESTION:
      console.log(action.payload)
      return {
        ...state,
        userAnswer: action.payload,
        isSelected: true,
      }
    case quizTypes.CHECK_QUESTION:
      return {
        ...state,

        currentQuestionIndex: state.questionIndex,
      }
    case quizTypes.NEXT_QUESTION:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        currentQuestionIndex: state.questionIndex,
        isChecked: true,
      }
    default:
      return state
  }
}
