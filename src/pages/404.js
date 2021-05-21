import { Link } from "react-router-dom"
import Layout from "../components/Trivia/Layout"

export default function PageNotFound() {
  return (
    <Layout>
      <h1>
        !Opssssss .. look likes page not found!!<Link to="/">Back to Home</Link>
      </h1>
    </Layout>
  )
}
