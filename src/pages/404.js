import { Link } from "react-router-dom"
import Layout from "../components/Trivia/Layout"
import SEO from "../components/Seo"

export default function PageNotFound() {
  return (
    <Layout>
      <SEO title="Not Found | quiz.chitran.de" />

      <h1>
        !Opssssss .. looks like page not found!!<Link to="/">Back to Home</Link>
      </h1>
    </Layout>
  )
}
