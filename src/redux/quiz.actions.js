import { quizTypes } from "./quiz.types"

import { store } from "./store"
import { sortArray, getSessionId } from "./quiz.helpers"

const urlAPI = "https://opentdb.com/api.php?amount=10&encode=base64"

export const fetchData = async sessionId => {
  // const sessionId = await getSessionId()

  fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
      const questions = data.results.map((item, i) => {
        const { correct_answer, incorrect_answers } = item
        const answers = sortArray([...incorrect_answers, correct_answer])
        return { ...item, answers, userAnswers: [], isSubmit: false }
      })
      console.log("added...")
      store.dispatch({
        type: quizTypes.ADD_QUESTION_SUCCESS,
        questions,
      })
    })
    .catch(err =>
      store.dispatch({
        type: quizTypes.ADD_QUESTION_FAIL,
      })
    )
}

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
