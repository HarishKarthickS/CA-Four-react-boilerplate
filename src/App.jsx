import { useEffect, useState } from "react";
import "./App.css";
// import questions from "./questions";
// import Result from "./components/Result";
import QuestionBox from "./Component/QuestionBox";



function App() {
  const [dark, setTheme] = useState(false);
  const [themeName, setThemeName] = useState("light");
  const [homeSection,setHomeSection] = useState(true)
  const [quizSection,setQuizSection] = useState(false)
  useEffect(()=>{
    if(dark){
      setThemeName("dark")
    }
    else{
      setThemeName("light")
    }
  },[dark])
  const handleClick = ()=>{
    setTheme(!dark);
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
  const Play =()=>{
    setHomeSection(false)
    setQuizSection(true)
  }
  const titleStyle={
    webkitTextStroke:dark? `.5px #fff`:`none`,
    textStroke:dark?`.5px #fff`:`none`
  }
  if(homeSection){
    return(
      <div className="App" style={styleTheme}>
        <header className="App-header">
          <h1></h1>
          <div id="theme" style={btnTheme}>
            <button id="light-btn" type="button" style={btnLightStyle} onClick={handleClick}>Light</button>
            <button id="dark-btn" type="button" style={btnDarkStyle} onClick={handleClick}>Dark</button>
          </div>
        </header>
        <div id="Body" style={bodyStyle}>
          <h1 style={titleStyle}>Master Quiz</h1>
          <button className="play" onClick={Play}><span>Play</span></button>
        </div>
      </div>
    )
  }
  else if(quizSection){
    return (
      
        <QuestionBox theme={dark}/>
      
    )
  }
 
}

export default App;