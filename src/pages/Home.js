import React, { useEffect } from "react"
import Layout from "../components/Trivia/Layout"
import { Link } from "react-router-dom"
import { StartButton, Text, ToggleButton } from "../Stylings"
import click from "../Stylings/click.mp3"
import start from "../Stylings/start.mp3"
export default function Home() {
  const clickAudio = new Audio(click)
  const startAudio = new Audio(start)
  const playSound = audioFile => {
    audioFile.play()
  }
  let On = false
  const Toggle = () => {
    On = !On
    On ? playSound(startAudio) : startAudio.pause()
  }
  return (
    <Layout>
      <div className="toggle-btn">
        <p>Sound On</p>
        <ToggleButton On={On} onClick={Toggle} />
      </div>
      <Link style={{ textDecoration: "none" }} to="/play">
        <StartButton onClick={() => playSound(clickAudio)}></StartButton>
        <Text>PRESS HERE</Text>
      </Link>
    </Layout>
  )
}
