import { useState } from 'react'
import data from '../questions'
import React from 'react'
import Result from './Result';
import './QuestionBox.css'
function QuestionBox(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [dark, setTheme] = useState(props.theme);
  const [highlight,setHighlight]=useState(false)
  const handleClick = ()=>{
    setTheme(!dark);
  }
  const hlClick=()=>{
    setHighlight(true);
  }
  const nhlClick=()=>{
    setHighlight(false);
  }
  const styleTheme = {
    backgroundColor:dark ? "#161616":"#FC8E8E",
  }
  const btnTheme={
    backgroundColor:dark? "#Fff":"#8f8f8f",
    width:dark?"12vw":"12vw"
  }
  const btnLightStyle={
    visibility:dark?"hidden":"visible"
  }
  const btnDarkStyle={
    visibility:dark?"visible":"hidden"
  }
  const bodyStyle = {
    backgroundColor:dark ? "#494949":"#fff",
    boxShadow:dark ? `2px 6px 6px 2px rgb(255, 81, 0)`:`0px 4px 4px 0px rgba(0, 0, 0, 0.5)`
  }
  const nextQuestion = (isCorrect)=>{
    if(isCorrect){
      setScore(prevScore => prevScore + 1)
    }
    setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1)
    }
  const questionStyle={
      color:(highlight)?"#ff0000":"#1400ff",
      webkitTextStroke:dark? `.3px #fff`:`none`,
      textStroke:dark?`.3px #fff`:`none`
  }
  const darkStyle={
    color:(dark)?"#ffffff":"#000000",
  }
  const titleStyle={
    color:(dark)?'#ff3d00':'#fff',
  }
  if(currentQuestion == data.length){
    return <Result win={score} theme={dark}/>
  }  
  else{
  return (
  <div className="App" style={styleTheme}>
    <header className="App-header">
    <h1 style={titleStyle}>Master Quiz</h1>
      <div id="theme" style={btnTheme}>
        <button id="light-btn" type="button" style={btnLightStyle} onClick={handleClick}>Light</button>
        <button id="dark-btn" type="button" style={btnDarkStyle} onClick={handleClick}>Dark</button>
      </div>
    </header>
    <div id="question-container" style={bodyStyle}>
      <h4 id="Ques-Num" style={darkStyle}>Question : {currentQuestion+1} out of {data.length}</h4>
      <h3 style={questionStyle}>{data[currentQuestion].text}</h3>
      <div id="options">
        {data[currentQuestion].options.map((option, index) => {
        return (
          <button style={darkStyle} key={index} id={index} onClick={() => nextQuestion(option.isCorrect)}>
          {option.text}
          </button>
        )})}
      </div>
      <div id="highlight-div">
        <button id="highlight" onClick={hlClick}>Highlight</button>
        <button id="remove-highlight" onClick={nhlClick}>Remove Highlight</button>
      </div>
    </div>
  </div>
)
}
}
export default QuestionBox

