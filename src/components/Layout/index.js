import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyle, Logo } from "../Stylings";
export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <Logo>QUIZTIME</Logo>
      </Link>

      <main>{children}</main>
      <footer>Created By Chitran © 2021</footer>
    </div>
  );
}
