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
    index,

    categoryId,
  } = useSelector(state => state)
  console.log(questions)
  return (
    <div>
      {questions.map((question, currentIndex) => (
        <StatusBar
          key={currentIndex}
          isCorrect={question.isCorrect}
          isSubmit={question.isSubmit}
          onClick={() => {
            if (question.isSubmit || currentIndex === index) {
              dispatch(snapAnswer(currentIndex, question.isSubmit))
            }
          }}
          style={
            question.isSubmit || currentIndex === index
              ? { cursor: "pointer" }
              : { cursor: "unset" }
          }
        />
      ))}
    </div>
  )
}
