import { quizTypes } from "./quiz.types"

const triviaInitState = {
  questions: [],
  error: null,
  questionIndex: 0,
  index: 0,
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
    case quizTypes.CHECK_ANSWER:
      const newQuestions = state.questions.map((question, index) =>
        state.questionIndex === index
          ? {
              ...question,
              isCorrect: state.correctAnswer ? "correct" : "wrong",
              userAnswer: state.userAnswer,
              isSubmit: true,
            }
          : question
      )
      return {
        ...state,
        isSubmitted: true,
        questions: newQuestions,
        point: state.correctAnswer ? state.point + 1000 : state.point,
        index: state.index + 1,
      }
    case quizTypes.NEXT_QUESTION:
      return {
        ...state,

        correctAnswer: null,
        isSelected: false,
        isSubmitted: false,

        questionIndex: state.questionIndex + 1,
      }
    case quizTypes.SNAP_QUESTION:
      return {
        ...state,
        questionIndex: action.payload,
        isSubmitted: action.isSubmitted,
        // index: action.payload,
      }
    case quizTypes.RESET_GAME:
      return {
        ...state,
        questions: [],
        point: 0,
        categoryId: null,
      }
    default:
      return state
  }
}
