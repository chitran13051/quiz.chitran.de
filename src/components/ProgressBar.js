import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { snapAnswer } from "../redux/quiz.actions"
import { StatusBar } from "../Stylings"
export default function ProgressBar({ totalQuestion }) {
  const dispatch = useDispatch()
  const {
    questions,
    questionIndex,
    isSelected,
    correctAnswer,
    point,
    isSubmitted,
    userAnswer,

    categoryId,
  } = useSelector(state => state)
  console.log(questions)
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <StatusBar
          key={questionIndex}
          isCorrect={question.isCorrect}
          isSubmit={question.isSubmit}
          onClick={() => {
            dispatch(snapAnswer(questionIndex))
          }}
        />
      ))}
    </div>
  )
}
