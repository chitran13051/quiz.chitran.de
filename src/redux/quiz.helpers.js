import { store } from "../redux/store"
import { quizTypes } from "../redux/quiz.types"

const urlAPI = "https://opentdb.com/api.php?amount=10"

export const fetchData = (x, y) => {
  fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
      const questions = data.results.map((item, i) => {
        const { correct_answer, incorrect_answers } = item
        const answers = [...incorrect_answers, correct_answer].sort(
          () => Math.random() - 0.5
        )
        return { ...item, answers, userAnswers: [], isSubmit: false }
      })
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
