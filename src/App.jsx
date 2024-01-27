import React, { useState } from 'react'
import './App.css'


function App() {
  const [screen, setScreen] = useState("")

  const store = []

  function updateScreen(event){
    setScreen(prevScreen => prevScreen + event.target.value)
  }

  function clearScreen() {
    setScreen("")
  }

  function operation(event) {
    store.push(Number(screen) + event.target.value)
    setScreen("")
  }


  return (
    <div className='calculator'>
      <input className="screen" value={screen} readOnly></input>
      <div className="firstRow">
        <button className="numBtn" value="7" onClick={updateScreen}>7</button>
        <button className="numBtn" value="8" onClick={updateScreen}>8</button>
        <button className="numBtn" value="9" onClick={updateScreen}>9</button>
        <button className="clear" onClick={clearScreen}>CLEAR</button>
      </div>
      <div className="secondRow">
        <button className="numBtn" value="4" onClick={updateScreen}>4</button>
        <button className="numBtn" value="5" onClick={updateScreen}>5</button>
        <button className="numBtn" value="6" onClick={updateScreen}>6</button>
        <button className="operation" onClick={operation}>-</button>
        <button className="operation" onClick={operation}>+</button>
      </div>
      <div className="bottomRows">
        <div className="thirdRow">
          <button className="numBtn" value="1" onClick={updateScreen}>1</button>
          <button className="numBtn" value="2" onClick={updateScreen}>2</button>
          <button className="numBtn" value="3" onClick={updateScreen}>3</button>
          <button className="operation" onClick={operation}>X</button>
        </div>
        <div className="fourthRow">
          <button className="zero" value={0} onClick={updateScreen}>0</button>
          <button className="numBtn">.</button>
          <button className="operation" onClick={operation}>/</button>
        </div>
        <div className="equals">
          <button className="equals">=</button>
        </div>
      </div>
    </ div>
  )
}

export default App
