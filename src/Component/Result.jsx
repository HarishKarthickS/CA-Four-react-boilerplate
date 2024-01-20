import {useState} from 'react'
import './Result.css'
function Result(props) {
  const [dark, setTheme] = useState(props.theme);
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
  const darkStyle={
  color:(dark)?"#ffffff":"#000000",
  }
  const titleStyle={
  color:(dark)?'#ff3d00':'#fff',
  }
  const PlayAgain=()=>{
    window.location.reload(false);
  }
  const ScoreStyle={
    webkitTextStroke:dark? `.3px #fff`:`none`,
    textStroke:dark?`.3px #fff`:`none`
  }
  const resultStyle={
    webkitTextStroke:dark? `.3px #fff`:`none`,
    textStroke:dark?`.3px #fff`:`none`
  }
  return (
    <div>
      
    <div className="App" style={styleTheme}>
    <header className="App-header">
    <h1 style={titleStyle}>Master Quiz</h1>
      <div id="theme" style={btnTheme}>
        <button id="light-btn" type="button" style={btnLightStyle} onClick={handleClick}>Light</button>
        <button id="dark-btn" type="button" style={btnDarkStyle} onClick={handleClick}>Dark</button>
      </div>
    </header>
    <div id="Body" style={bodyStyle}>
      <h2 id="final-result" style={resultStyle}>Final Result</h2>
      <h3 id='correct' style={darkStyle}>{props.win} out of 5 correct</h3>
      <h2 id='score' style={ScoreStyle}>Score : {(props.win*100)/5} %</h2>
      <button className="play" onClick={PlayAgain}><span>Play Again</span></button>
    </div>
  </div>
  </div>
  )
}

export default Result
