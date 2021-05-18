import React from "react"
import Layout from "../components/Trivia/Layout"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <Layout>
      <Link to="/play">
        <button> START</button>
      </Link>
    </Layout>
  )
}
