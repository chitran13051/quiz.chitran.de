import styled, { createGlobalStyle, keyframes } from "styled-components"
import BgImg from "./bg.jpg"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.wrapper{
    display: flex;
    height: 100vh;
    flex-direction: column;
    background:url(${BgImg});
    background-size: cover;
  
  
  header, footer{
      height: 200px;
  }
  main{
flex: 1;
  }
}

`
const PressAnimation = keyframes`
0%{
opacity : 0;
}

80%{
    opacity : 1;
   

}

`
export const Logo = styled.div`
  color: #ffffff;
  font-size: 6rem;

  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    blue 0px 0px 20px, blue 0px 0px 30px, blue 0px 0px 40px, blue 0px 0px 50px,
    blue 0px 0px 75px;

  animation-name: ${PressAnimation};
  animation-duration: 3s;
  animation-iteration-count: ease-in;
`
const FallAnimation = keyframes`
0%{
transform : translateY(-200px)
}

80%{
    /* opacity : 1; */
    transform : translateY(100px);
    box-shadow: inset 0px -7px 0px 3px #bce9f6,
    inset -1px 14px 11px 0px rgb(255 255 255 / 38%),
    inset 0px -20px 6px 3px rgb(0 0 0 / 40%), 0 0 1px #000;

}
`

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
`
const PulsingTextAnimation = keyframes`
0%{

color : blue
}

100%{
    color : white

}


`

export const Text = styled.h1`
  margin: 20px;

  animation-name: ${PulsingTextAnimation};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
`

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
`
