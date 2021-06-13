import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import ReactSelect from "react-select";
import BgImg from "./bg.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
      margin:   0;
         padding: 0;
      box-sizing: border-box;
      
      letter-spacing: 1px
      min-height: 100vh
      
  }
  .wrapper{
      display: flex;
      height: 100vh;
      flex-direction: column;
      background:url(${BgImg});
      background-size: cover;
      font-family: "Mako", sans-serif;
      outline: none;
    
    
    header{
        height: 200px;
    }
    footer{
      height: 50px;
    }
    main{
  flex: 1;
    }
  }

`;
//////////////////////
//Home Page Styling
///////////////////////
const PressAnimation = keyframes`
  0% {
  opacity: 0;
  }

  80%{
 opacity: 1;
    

  }
`;
export const Logo = styled.div`
  color: #ffffff;
  font-size: 6rem;
  padding-top: 30px;
  padding-bottom: 20px;

  font-family: "Luckiest Guy", cursive;

  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    blue 0px 0px 20px, blue 0px 0px 30px, blue 0px 0px 40px, blue 0px 0px 50px,
    blue 0px 0px 75px;

  animation-name: ${PressAnimation};
  animation-duration: 3s;
  animation-iteration-count: ease-in;
`;
const FallAnimation = keyframes`
  0%  {
    opacity: 0;
   transform : translateY(-200px)
  }

  80% {
      opacity : 1;
    transform : translateY(20px);
    box-shadow: inset 0px -7px 0px 3px #bce9f6,
    inset -1px 14px 11px 0px rgb(255 255 255 / 38%),
    inset 0px -20px 6px 3px rgb(0 0 0 / 40%), 0 0 1px #000;

  }
`;

export const StartButton = styled.button`
  margin-top: 150px;
  text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
  font-weight: 600;

  padding: 5rem;
  background: linear-gradient(90deg, orange, orange);
  border-radius: 50%;

  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  box-shadow: inset 0px -7px 0px 3px #bce9f6,
    inset -1px 14px 11px 0px rgb(255 255 255 / 38%),
    inset 0px -20px 6px 3px rgb(0 0 0 / 40%), 0 0 1px #000;

  animation-name: ${FallAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: ease-in;

  &:hover {
    background: red;
  }
  &:active {
    transform: translateY(10px);
  }
`;
const PulsingTextAnimation = keyframes`
0%{

color : blue
}

100%{
    color : white

}


`;

export const Text = styled.h1`
  margin: 20px;

  animation-name: ${PulsingTextAnimation};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
`;

export const ToggleButton = styled.input.attrs({ type: "checkbox" })`
  & {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    background-color: #f3f1f1;
    height: 51px;
    width: 90px;
    border-radius: 32px;
    border: 1px solid #c6c6c6;
    outline: none;
    transition: 400ms;
    box-shadow: 0 0 0 0 #ccc;
    cursor: pointer;
  }
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 1px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #ccc;
    transition: 200ms;
    box-shadow: inset 7px 0px 9px 6px #a2a2a28c;
  }

  &:checked {
    background-color: blue;
  }

  &:checked::before {
    left: 39px;
    background-color: white;
  }
`;

//////////////////////
// Status Bars
//////////////////////
export const StatusBar = styled.div.attrs((props) => {
  if (props.isSubmit && props.isCorrect === "correct") {
    return {
      background: "#5efa73"
    };
  } else if (props.isSubmit && props.isCorrect === "wrong") {
    return {
      background: "red"
    };
  } else {
    return {
      background: "#ddd"
    };
  }
})`
  width: 10%;
  height: 20px;
  background-color: ${(props) => props.background};
  display: inline-flex;
  border: 1px solid black;
`;
//////////////////////
///Category Styling///

export const CategoryStyle = styled(ReactSelect)`
  max-width: 300px;
  margin: 30px auto 0;
  &.Select--multi {
    .Select-value {
      display: inline-flex;
      align-items: center;
    }
  }
  & .Select-placeholder {
    font-size: smaller;
  }
`;

//////////////////////
//Play Page Styling
///////////////////////

export const Card = styled.div`
  width: 50%;
  height: 50vh;
  max-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Question = styled.div`
  margin: 2rem 0;
  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 9px -4px 20px 0px navy;
`;
export const Answer = styled.button.attrs((props) => {
  if (props.isSubmit && props.isCorrect === "correct") {
    return {
      answerBackground: ` linear-gradient(
      -180deg
      ,#fcfcfc 0%,#08ff08 100%)`
    };
  } else if (
    props.isSubmit &&
    props.isCorrect === "wrong" &&
    props.userAnswer
  ) {
    return {
      answerBackground: ` linear-gradient(-180deg, #ff89d6 0%, red 100%)`
    };
  } else {
    return {
      answerBackground: null
    };
  }
})`
  cursor: pointer;
  position: relative;
  width: 100%;
  /* height: auto; */
  padding: 1rem;

  margin-top: 15px;
  border-radius: 3.75rem;

  font-size: 1.5rem;
  font-weight: 600;

  border: 1px solid #012880;
  background-image: ${(props) => props.answerBackground};
  /* linear-gradient(-180deg, #ff89d6 0%, hotpink 100%); */
  box-shadow: 0 1rem 1.25rem 0 rgb(22 75 195 / 50%),
    0 -0.25rem 1.5rem rgb(23 217 199) inset,
    0 0.75rem 0.5rem rgb(255 255 255 / 40%) inset,
    0 0.25rem 0.5rem 0 rgb(70 207 194) inset;

  &:before {
    content: "";
    display: block;
    height: 0.25rem;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 7.5rem);

    border-radius: 100%;

    opacity: 0.7;
    background-image: linear-gradient(
      -270deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    content: "";
    height: 0.25rem;
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 7.5rem);

    border-radius: 100%;

    opacity: 0.05;
  }
  &:disabled {
    color: black;
  }

  &:focus {
    background-image: linear-gradient(-180deg, #ff89d6 0%, blue 100%);
    color: white;
  }
`;
export const Button = styled.button`
  padding: 1rem;
  margin: 35px 0;
  font-family: "Luckiest Guy", cursive;

  border-radius: 5px;
  font-size: 1.5rem;
  border: none;

  width: 100%;

  /* box-shadow: 3px 3px 3px 5px #ddd; */

  background: ${(props) => (props.background ? "orange" : "#ccc")};

  animation: ${(props) =>
    props.animation
      ? css`
          ${ScaleButton} 1s ease-out;
          cursor: pointer;
        `
      : ""};
`;
const ScaleButton = keyframes`
  0%{
    transform : scale(1);
    
  }
  80%{
    transform : scale(1.1);
  
  }
`;

export const PointWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 900;
  font-size: 1.5rem;
  font-family: "Luckiest Guy", cursive;
  color: white;
`;

export const Result = styled.div`
  width: 50%;
  height: 50%;
  margin: 10% auto;

  font-size: 1.7rem;
  font-family: "Luckiest Guy", cursive;
  color: hotpink;

  text-shadow: 5px 5px #fff;
  animation: ${ScaleButton} 5s infinite;
`;
