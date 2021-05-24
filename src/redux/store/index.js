import { createStore, applyMiddleware, compose } from "redux"
import { triviaReducer } from "../quiz.reducers"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)

export const store = createStore(triviaReducer, applyMiddleware(thunk))

// action creators

export const addQuestion = hello => ({ type: "ADD_TO_CARt", payload: hello })
