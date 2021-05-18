import "./App.css"
import { Switch, Route, Link } from "react-router-dom"
import Trivia from "./components/Trivia"
import Play from "./pages/Play"
import Layout from "./components/Trivia/Layout"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/play">
          <Play />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
