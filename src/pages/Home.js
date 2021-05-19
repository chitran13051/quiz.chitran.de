import React, { useState, useEffect } from "react"
import Layout from "../components/Trivia/Layout"
import { GiSoundOn, GiSoundOff } from "react-icons/gi"
import { Link } from "react-router-dom"
import { StartButton, Text, ToggleButton } from "../Stylings"
import click from "../Stylings/click.mp3"
import start from "../Stylings/start.mp3"

const clickAudio = new Audio(click)
const startAudio = new Audio(start)
const playSound = audioFile => {
  audioFile.play()
}
export default function Home() {
  const [On, setOn] = useState(false)
  useEffect(() => {
    On ? playSound(startAudio) : startAudio.pause()
  }, [On])
  const Toggle = () => {
    setOn(!On)
  }
  return (
    <Layout>
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
      <Link style={{ textDecoration: "none", margin: "10px" }} to="/play">
        <StartButton onClick={() => playSound(clickAudio)}></StartButton>
        <Text>PRESS HERE</Text>
      </Link>
    </Layout>
  )
}
