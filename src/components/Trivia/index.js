import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchData,
  playSound,
  selectQuestion,
  nextQuestion,
  checkAnswer,
} from "../../redux/quiz/quiz.actions"
import ProgressBar from "../ProgressBar"
import { Question, Button, Card, Answer, PointWrap, Result } from "../Stylings"
import { IoBulbOutline } from "react-icons/io5"
import { GiTwoCoins } from "react-icons/gi"
import { TiDeleteOutline } from "react-icons/ti"
import { BsArrowClockwise } from "react-icons/bs"
import { quizTypes } from "../../redux/quiz/quiz.types"
import { Link } from "react-router-dom"
import Coinsdrop from "../Stylings/coinsdrop.mp3"
import Lose from "../Stylings/lose.mp3"
import Click from "../Stylings/click.mp3"

const clickAudio = new Audio(Click)
const coinsdropAudio = new Audio(Coinsdrop)
const loseAudio = new Audio(Lose)

function Trivia() {
  const [coin, setCoin] = useState(0)
  const [score, setScore] = useState(0)
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
    let highestscore = JSON.parse(localStorage.getItem("highestscore")) || []
    if (point > Number(highestscore)) {
      localStorage.setItem("highestscore", JSON.stringify(point))
      setScore(point)
    } else {
      setScore(highestscore)
    }
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
        <h3 style={{ color: "orange", margin: " 30px" }}>
          {" "}
          Your Score: {point}
        </h3>
        <h3 style={{ color: "red", margin: " 30px" }}>
          Highest Score: {score}
        </h3>

        <>
          <Link style={{ textDecoration: "none" }} to="/">
            Play Again <BsArrowClockwise />
          </Link>
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
      <ProgressBar totalQuestion={questions.length}></ProgressBar>
      <Question>
        <span> {atob(questions[questionIndex].question)} </span>{" "}
      </Question>
      {questions[questionIndex].answers.map((answer, i) => {
        const correctAnswer = questions[questionIndex].correct_answer === answer

        return (
          <Answer
            disabled={questions[questionIndex].isSubmit}
            isCorrect={correctAnswer ? "correct" : "wrong"}
            isSubmit={questions[questionIndex].isSubmit}
            userAnswer={questions[questionIndex].userAnswer === i}
            onClick={e => {
              dispatch(selectQuestion(i, correctAnswer))
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
            !isSubmitted ? dispatch(checkAnswer()) : dispatch(nextQuestion())
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
