import React, { useState } from 'react'
import './App.css'
import Number from './components/Number'
import Operation from './components/Operation'

function App() {
  const [screen, setScreen] = useState("")
  const [operation, setOperation] = useState(null)
  const store = []

  function updateScreen(event){
    store += event.target.value
    setScreen(prevScreen => {
      prevScreen += event.target.value
    })
  }

  function clearScreen() {
    setScreen("")
  }

  function operation(event) {
    oldStore = store
    store = []
    setOperation(event.target.value)
  }

  return (
    <div className='calculator'>
      <div className="screen">{screen}</div>
      <div className="firstRow">
        <Number className="numBtn" value="7" handleClick={updateScreen}>7</Number>
        <Number className="numBtn" value="8" handleClick={updateScreen}>8</Number>
        <Number className="numBtn" value="9" handleClick={updateScreen}>9</Number>
        <Operation className="clear" handleClick={clearScreen}>CLEAR</Operation>
      </div>
      <div className="secondRow">
        <Number className="numBtn" value="4" handleClick={updateScreen}>4</Number>
        <Number className="numBtn" value="5" handleClick={updateScreen}>5</Number>
        <Number className="numBtn" value="6" handleClick={updateScreen}>6</Number>
        <Operation className="operation" handleClick={operation}>-</Operation>
        <Operation className="operation" handleClick={operation}>+</Operation>
      </div>
      <div className="bottomRows">
        <div className="thirdRow">
          <Number className="numBtn" value="1" handleClick={updateScreen}>1</Number>
          <Number className="numBtn" value="2" handleClick={updateScreen}>2</Number>
          <Number className="numBtn" value="3" handleClick={updateScreen}>3</Number>
          <Operation className="operation" handleClick={operation}>X</Operation>
        </div>
        <div className="fourthRow">
          <Number className="zero">0</Number>
          <Number className="numBtn">.</Number>
          <Operation className="operation" handleClick={operation}>/</Operation>
        </div>
        <div className="equals">
          <Equals className="equals"></Equals>
        </div>
      </div>
    </ div>
  )
}

export default App
