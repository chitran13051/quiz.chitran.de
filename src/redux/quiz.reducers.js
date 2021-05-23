import { quizTypes } from "./quiz.types"

const triviaInitState = {
  questions: [],
  error: null,
  questionIndex: 0,
  point: 0,

  isSubmitted: false,
  isSelected: false,
  userAnswer: null,
  correctAnswer: null,
  categoryId: null,
}

export const triviaReducer = (state = triviaInitState, action) => {
  switch (action.type) {
    case quizTypes.SELECT_CATEGORY:
      return {
        ...state,
        categoryId: action.payload,
      }

    case quizTypes.ADD_QUESTION_SUCCESS:
      return {
        ...triviaInitState,
        questions: action.questions,
      }
    case quizTypes.ADD_QUESTION_FAIL:
      return {
        ...state,
        error: "Something gone wrong !!!!",
      }
    case quizTypes.SELECT_QUESTION:
      return {
        ...state,
        userAnswer: action.payload,
        correctAnswer: action.correctAnswer,
        isSelected: true,
      }
    case quizTypes.CHECK_QUESTION:
      return {
        ...state,
        isSubmitted: true,

        point: state.correctAnswer ? state.point + 1000 : state.point,
      }
    case quizTypes.NEXT_QUESTION:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        correctAnswer: null,
        isSelected: false,
        isSubmitted: false,
      }
    case quizTypes.RESET_GAME:
      return {
        ...state,
        questions: [],

        categoryId: null,
      }
    default:
      return state
  }
}
