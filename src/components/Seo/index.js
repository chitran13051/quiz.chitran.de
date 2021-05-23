import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title}
      meta={[
        { name: "description", content: "A trivia game by chitran.de" },
        {
          name: "author",
          content: "https://chitran.de",
        },
      ]}
    />
  )
}

export default SEO
