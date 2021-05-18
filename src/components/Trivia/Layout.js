import React from "react"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <header> QUIZTIME</header>
      <main>{children}</main>
      <footer>Created By Chitran © 2021</footer>
    </div>
  )
}
