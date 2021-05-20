import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../redux/quiz.actions"
import { selectQuestion, nextQuestion } from "../../redux/quiz.actions"
import { Question, Button, Card, Answer } from "../../Stylings"
import { IoBulbOutline } from "react-icons/io5"
import { quizTypes } from "../../redux/quiz.types"

function Trivia() {
  const dispatch = useDispatch()
  const {
    questions,
    questionIndex,
    isSelected,
    isChecked,
    point,
    isSubmitted,
    userAnswer,
  } = useSelector(state => state)
  console.log(isSelected)
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
      <h1>{point}</h1>
      <Question>
        <span> {questions[questionIndex].question} </span>{" "}
      </Question>
      {questions[questionIndex].answers.map((answer, i) => {
        const correctAnswer = questions[questionIndex].correct_answer === answer
        // console.log(answer)
        return (
          <Answer
            isCorrect={correctAnswer ? "correct" : "wrong"}
            isSubmit={isSubmitted}
            userAnswer={userAnswer === i}
            onClick={e => {
              dispatch({
                type: quizTypes.SELECT_QUESTION,
                // payload: e.target.outerText,
                payload: i,
                // correct: correctAnswer,
              })
            }}
            // background={bgColor}
            key={i}
          >
            {answer}
          </Answer>
        )
      })}

      <div className="btn">
        <Button
          disabled={!isSelected}
          background={isSelected}
          animation={isSelected}
          onClick={() => {
            dispatch({
              type: quizTypes.CHECK_QUESTION,
            })
          }}
        >
          {isChecked ? "Next Question" : "Check"}
          <IoBulbOutline />
        </Button>
      </div>
    </Card>
  )
}

export default Trivia
