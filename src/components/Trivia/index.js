import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../redux/quiz.helpers"
import { triviaReducer } from "../../redux/quiz.reducers"

import styled from "styled-components"
import { quizTypes } from "../../redux/quiz.types"

const Question = styled.div`
  border: 1px dashed #cecece;
  padding: 1rem;
`
const Button = styled.button.attrs(props => {
  switch (props.background) {
    case "correct":
      return {
        answerBackground: "green",
      }
    case "incorrect":
      return {
        answerBackground: "red",
      }
    case "check":
      return {
        answerBackground: "blue",
      }
    case "disable":
      return {
        answerBackground: "#ccc",
      }
    default:
      return {
        answerBackground: "orange",
      }
  }
})`
  background-color: ${props => props.answerBackground};
`

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
    <Question>
      <h5> {questions[questionIndex].question} </h5>
      {questions[questionIndex].answers.map((answer, i) => {
        const bgColor = questions[questionIndex].correct_answer

        return (
          <Button
            onClick={e =>
              dispatch({
                type: quizTypes.SELECT_QUESTION,
                payload: e.target.outerText,
              })
            }
            background={bgColor}
            key={i}
          >
            {answer}
          </Button>
        )
      })}

      <div className="btn">
        <Button
          disabled={!isSelected}
          onClick={() =>
            dispatch({
              type: quizTypes.NEXT_QUESTION,
              payload: questionIndex,
            })
          }
          background="disable"
        >
          {isChecked ? "Next Question" : "Check"}
        </Button>
      </div>
    </Question>
  )
}

export default Trivia
