import React from "react"
import Trivia from "../components/Trivia"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default function Play() {
  return (
    <Layout>
      <SEO title="Trivia made with ❤️ chitran.de" />
      <Trivia />
    </Layout>
  )
}
