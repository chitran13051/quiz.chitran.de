import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData, playSound } from "../../redux/quiz.actions"
import { selectQuestion, nextQuestion } from "../../redux/quiz.actions"
import {
  Question,
  Button,
  Card,
  Answer,
  PointWrap,
  Result,
} from "../../Stylings"
import { IoBulbOutline } from "react-icons/io5"
import { GiTwoCoins } from "react-icons/gi"
import { TiDeleteOutline } from "react-icons/ti"
import { BsArrowClockwise } from "react-icons/bs"
import { quizTypes } from "../../redux/quiz.types"
import { Link } from "react-router-dom"
import Coinsdrop from "../../Stylings/coinsdrop.mp3"
import Lose from "../../Stylings/lose.mp3"
import Click from "../../Stylings/click.mp3"

const clickAudio = new Audio(Click)
const coinsdropAudio = new Audio(Coinsdrop)
const loseAudio = new Audio(Lose)

function Trivia() {
  const [coin, setCoin] = useState(0)
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

  const handleFetchData = categoryId => {
    const urlAPI = categoryId
      ? `https://opentdb.com/api.php?amount=10&encode=base64&category=${categoryId}`
      : "https://opentdb.com/api.php?amount=10&encode=base64"

    dispatch(() => fetchData(urlAPI))
  }
  useEffect(() => {
    handleFetchData(categoryId)
  }, [])
  function animateNumber(point, delay, coin) {
    let currentNumber = coin
    const interval = setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= point) {
        clearInterval(interval)
      } else {
        currentNumber += 10
      }
      setCoin(currentNumber)
    }
  }
  useEffect(() => {
    animateNumber(point, 10, coin)
  }, [point])
  useEffect(() => {
    if (isSubmitted) {
      correctAnswer ? playSound(coinsdropAudio) : playSound(loseAudio)
    }
  }, [isSubmitted])

  if (questions.length === 0) {
    return <h1>Loading ...</h1>
  }
  if (questionIndex === questions.length) {
    return (
      <Result>
        <h1>COMPLETE!</h1>
        <h3 style={{ color: "orange" }}>Score: {point}</h3>
        <>
          {/* <Button
            style={{
              background: "aqua",

              cursor: "pointer",
            }}
            onClick={() => handleFetchData(categoryId)}
          >
            Play Again <BsArrowClockwise />
          </Button> */}
          <Button
            style={{ cursor: "pointer" }}
            background
            onClick={() =>
              dispatch({
                type: quizTypes.RESET_GAME,
              })
            }
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Play Again <BsArrowClockwise />
            </Link>
          </Button>
        </>
      </Result>
    )
  }
  console.log(questions)
  return (
    <Card>
      <PointWrap>
        {questionIndex + 1}/{questions.length}
        <span>
          <GiTwoCoins style={{ color: "yellow", fontSize: "3rem" }} />
          {coin}
        </span>
      </PointWrap>
      <Question>
        <span> {atob(questions[questionIndex].question)} </span>{" "}
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
            {atob(answer)}
          </Answer>
        )
      })}
      <div className="btn">
        <Button
          disabled={!isSelected}
          background={isSelected}
          animation={isSelected}
          onClick={() => {
            !isSubmitted
              ? dispatch({
                  type: quizTypes.CHECK_QUESTION,
                })
              : dispatch({
                  type: quizTypes.NEXT_QUESTION,
                })
          }}
        >
          {isSubmitted ? "Next" : "Check"}
          {isSubmitted ? null : <IoBulbOutline />}
        </Button>
      </div>
    </Card>
  )
}

export default Trivia
