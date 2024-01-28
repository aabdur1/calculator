import React, { useState } from 'react'
import './App.css'


function App() {
  const [screen, setScreen] = useState("")
  const [storedValue, setStoredValue] = useState(0)
  const [operation, setOperation] = useState("")
  const [decimal, setDecimal] = useState(true)

  function updateScreen(event){
    setScreen(prevScreen => prevScreen.length < 9 
      ? prevScreen + event.target.value 
      : prevScreen
      )
  }

  function clearScreen() {
    setScreen("")
    setStoredValue("")
    setOperation("")
    setDecimal(true)
  } 

  function handleDecimal() {
     if (decimal) {
      setScreen(prevScreen => prevScreen + ".")
      setDecimal(false)
     } else {
      return
     }
  }

  function calculate(operationType) {
    if (!screen) return
    const currentValue = Number(screen)
    if (storedValue){
      setScreen("")
      const result = doCalculation()
      setStoredValue(result)
    } else {
      setStoredValue(currentValue)
      setScreen("")
    }
    setOperation(operationType)
    setDecimal(true)
  }

  function doCalculation() {
    const currentValue = Number(screen)
    switch (operation) {
      case "add":
        return storedValue + currentValue
      case "subtract":
        return storedValue - currentValue
      case "multiply":
        return storedValue * currentValue
      case "divide":
        if (currentValue === 0) {
          setScreen(":(")
          return
        }
      default:
        return currentValue
    }
  }

  function equals() {
    if (!operation || !screen) return

    const result = doCalculation()
    setScreen(String(result))
    setStoredValue(0)
    setDecimal(true)
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
        <button className="operation" onClick={() => calculate("subtract")}>-</button>
        <button className="operation" onClick={() => calculate("add")}>+</button>
      </div>
      <div className="bottomRows">
        <div className="thirdFourth">
          <div className="thirdRow">
            <button className="numBtn" value="1" onClick={updateScreen}>1</button>
            <button className="numBtn" value="2" onClick={updateScreen}>2</button>
            <button className="numBtn" value="3" onClick={updateScreen}>3</button>
            <button className="operation" onClick={() => calculate("multiply")}>X</button>
          </div>
          <div className="fourthRow">
            <button className="zero" value="0" onClick={updateScreen}>0</button>
            <button className="numBtn" value={decimal} onClick={handleDecimal}>&#183;</button>
            <button className="operation" onClick={() => calculate("divide")}>/</button>
          </div> 
        </div>
        <div className="equals">
          <button className="equals" onClick={equals}>=</button>
        </div>
      </div>
    </ div>
  )
}

export default App
