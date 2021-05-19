import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../redux/quiz.actions"
import { selectQuestion, nextQuestion } from "../../redux/quiz.actions"
import { Question, Button, Card, Answer } from "../../Stylings"
import { IoBulbOutline } from "react-icons/io5"
import { quizTypes } from "../../redux/quiz.types"

function Trivia() {
  const dispatch = useDispatch()
  const { questions, questionIndex, isSelected, isChecked } = useSelector(
    state => state
  )
  const handleFetchData = () => {
    dispatch(fetchData)
  }
  useEffect(() => {
    dispatch(fetchData)
  }, [])

  if (questions.length === 0) {
    return <h1>Loading ...</h1>
  }
  return (
    <Card>
      <Question>
        <span> {questions[questionIndex].question} </span>{" "}
      </Question>
      {questions[questionIndex].answers.map((answer, i) => {
        const bgColor = questions[questionIndex].correct_answer

        return (
          <Answer
            onClick={e => dispatch(selectQuestion(e.target.outerText))}
            background={bgColor}
            key={i}
          >
            {answer}
          </Answer>
        )
      })}

      <div className="btn">
        <Button
          //  {isSelected? background = 'correct'}
          onClick={() => dispatch(nextQuestion(questionIndex))}
          // background="correct"
        >
          {isChecked ? "Next Question" : "Check"}
          <IoBulbOutline />
        </Button>
      </div>
    </Card>
  )
}

export default Trivia
