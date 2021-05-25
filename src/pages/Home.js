import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { quizTypes } from "../redux/quiz.types"
import Layout from "../components/Trivia/Layout"
import Category from "../components/Category"
import { GiSoundOn, GiSoundOff } from "react-icons/gi"
import { Link } from "react-router-dom"
import { StartButton, Text, ToggleButton } from "../Stylings"
import { playSound } from "../redux/quiz.actions"
import click from "../Stylings/click.mp3"
import start from "../Stylings/start.mp3"

import SEO from "../components/Seo"

const clickAudio = new Audio(click)
const startAudio = new Audio(start)

export default function Home() {
  const dispatch = useDispatch()
  const [On, setOn] = useState(false)
  useEffect(() => {
    On ? playSound(startAudio) : startAudio.pause()
  }, [On])
  useEffect(() => {
    dispatch({
      type: quizTypes.RESET_GAME,
    })
  }, [])
  const Toggle = () => {
    setOn(!On)
  }
  return (
    <Layout>
      <SEO title="Home | quiz.chitran.de" />
      <div className="toggle-btn">
        <ToggleButton onClick={Toggle} />
        {On ? (
          <GiSoundOff
            style={{
              fontSize: "2rem",
              margin: "10px",
              // color: "white",
            }}
          />
        ) : (
          <GiSoundOn
            style={{
              fontSize: "2rem",
              margin: "10px",
              color: "blue",
            }}
          />
        )}
      </div>
      <Category />
      <Link style={{ textDecoration: "none", margin: "10px" }} to="/play">
        <StartButton
          onClick={() => {
            playSound(clickAudio)
          }}
        ></StartButton>
        <Text>PRESS HERE</Text>
      </Link>
    </Layout>
  )
}
