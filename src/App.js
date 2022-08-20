import { useState, useEffect } from "react"

function App() {
const [display, setDisplay] = useState("")
const [topDisplay, setTopDisplay] = useState("")

function handleClick(event, number) {
if (display.includes("+") || display.includes("-") || display.includes("*") || display.includes("/")) { //If display is currently an operator, clean the display
  setTopDisplay(topDisplay + display)
  setDisplay(number)
} else {
  setDisplay(display + number)
}
if (display.length > 21 || display == "Digit limit met") {
    setDisplay("Digit limit met")
    setTimeout(() => {
      setDisplay("")
    }, 1000);
  return
}
};


function handleDecimal() {
  if (display.includes(".") || display == "+" || display == "-" || display == "*" || display == "/" || display == "") { //Do not allow dots to repeat in one number or go after an operator
    return
  } else {
    setDisplay(display + ".")
  }

}

function handleClickedOperator(event, operator) { 
  if (display == "+" || display == "-" || display == "*" || display == "/") { //Do not allow operators to repeat one after another
    setDisplay(operator)
    return
  }
setDisplay(operator)
setTopDisplay(topDisplay + display)
}

function clearDisplay() {
  setDisplay("")
  setTopDisplay("")
}

function handleEqual() {
  setTopDisplay(eval(topDisplay + display))
  setDisplay("")
}

function handleDelete() {
  setDisplay(display.slice(0, -1))
}


  return (
    <div className="App">
      <div className="container">
      <div id="display">
        <div className="top-display">{topDisplay + display}</div>
        <div className="bottom-display">{display}</div>
      </div>
      <button id="equals" onClick={handleEqual}>=</button>
      
      <button id="zero" onClick={event => handleClick(event, "0")}>0</button>
      <button id="one" onClick={event => handleClick(event, "1")}>1</button>
      <button id="two" onClick={event => handleClick(event, "2")}>2</button>
      <button id="three" onClick={event => handleClick(event, "3")}>3</button>
      <button id="four" onClick={event => handleClick(event, "4")}>4</button>
      <button id="five" onClick={event => handleClick(event, "5")}>5</button>
      <button id="six" onClick={event => handleClick(event, "6")}>6</button>
      <button id="seven" onClick={event => handleClick(event, "7")}>7</button>
      <button id="eight" onClick={event => handleClick(event, "8")}>8</button>
      <button id="nine" onClick={event => handleClick(event, "9")}>9</button>
      <button id="decimal" onClick={handleDecimal}>.</button>

      <button id="add" onClick={event => handleClickedOperator(event, "+")}>+</button>
      <button id="substract" onClick={event => handleClickedOperator(event, "-")}>-</button>
      <button id="divide" onClick={event => handleClickedOperator(event, "/")}>/</button>
      <button id="multiply" onClick={event => handleClickedOperator(event, "*")}>*</button>

      
      <button id="clear" onClick={clearDisplay}>AC</button>
      <button id="delete" onClick={handleDelete}>DEL</button>
      </div>
    </div>
  );
}

export default App;
