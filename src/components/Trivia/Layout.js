import React from "react"
import { GlobalStyle, Logo } from "../../Stylings"
export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <GlobalStyle />

      <Logo>QUIZTIME</Logo>
      <main>{children}</main>
      <footer>Created By Chitran © 2021</footer>
    </div>
  )
}
