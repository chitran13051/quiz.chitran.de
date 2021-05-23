import { quizTypes } from "./quiz.types"

import { store } from "./store"
import { sortArray, getSessionId } from "./quiz.helpers"

export const fetchData = async urlAPI => {
  try {
    const response = await fetch(urlAPI)
    const data = await response.json()
    const questions = data.results.map((item, i) => {
      const { correct_answer, incorrect_answers } = item
      const answers = sortArray([...incorrect_answers, correct_answer])
      return { ...item, answers, userAnswers: [], isSubmit: false }
    })
    store.dispatch({
      type: quizTypes.ADD_QUESTION_SUCCESS,
      questions,
    })
  } catch (error) {
    store.dispatch({
      type: quizTypes.ADD_QUESTION_FAIL,
    })
  }
}

export const selectCategory = payload => ({
  type: quizTypes.SELECT_CATEGORY,
  payload,
})

export const selectQuestion = payload => ({
  type: quizTypes.SELECT_QUESTION,
  payload,
})

export const nextQuestion = payload => ({
  type: quizTypes.NEXT_QUESTION,
  payload,
})
export const playSound = audioFile => {
  audioFile.play()
}
