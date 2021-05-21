import PageNotFound from "pages/404"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Play from "./pages/Play"

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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
