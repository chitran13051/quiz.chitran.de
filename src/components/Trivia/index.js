import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../redux/quiz.actions"
import { selectQuestion, nextQuestion } from "../../redux/quiz.actions"
import { Question, Button, Card, Answer, PointWrap } from "../../Stylings"
import { IoBulbOutline } from "react-icons/io5"
import { GiTwoCoins } from "react-icons/gi"
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
      <PointWrap>
        <span>{point}</span>
        <GiTwoCoins style={{ color: "yellow", fontSize: "3rem" }} />
      </PointWrap>
      <Question>
        <span> {questions[questionIndex].question} </span>{" "}
      </Question>
      {questions[questionIndex].answers.map((answer, i) => {
        const correctAnswer = questions[questionIndex].correct_answer === answer

        return (
          <Answer
            disabled={isSubmitted}
            isCorrect={correctAnswer ? "correct" : "wrong"}
            isSubmit={isSubmitted}
            userAnswer={userAnswer === i}
            onClick={e => {
              dispatch({
                type: quizTypes.SELECT_QUESTION,
                payload: i,
                correctAnswer,
              })
            }}
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
          {isSubmitted ? "Next Question" : "Check"}
          {isSubmitted ? null : <IoBulbOutline />}
        </Button>
      </div>
    </Card>
  )
}

export default Trivia
