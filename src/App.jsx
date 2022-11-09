import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("0");

  const calc = (expression) => {
    expression = expression.replace(/x/g, "*")
    const endWithOperator = /[\+\-\*\/]$/;
    if (endWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }
    expression = expression.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("");    
    let answer =  Math.round(Function(`return ${expression}`)() * 100000000) / 100000000;
    console.log(answer);
    return answer.toString(); 
  };

  const handleClick = (e) => {
    const value = e.target.innerText;

    switch (value) {
      case "AC":
        setDisplay("0");
        break;
      case "=":
        let result = calc(display);
        setDisplay(result);
        break;
      case ".":
        if (display === "0") {
          setDisplay("0.");
          return;
        }
        const lastDigit = display.match(/(\d+\.?\d*)$/)[0];
        if (lastDigit.includes(".")) return;
        setDisplay(display + ".");
        break;
      
      default:
        setDisplay(display === "0" ? value : display + value);
    }
  };

  return (
    <div className="container">
      <div id="display" className="display">
        {display}
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClick} className="btn clear">
          AC
        </button>
        <button id="divide" onClick={handleClick} className="btn">
          /
        </button>
        <button id="multiply" onClick={handleClick} className="btn">
          x
        </button>
        <button id="seven" onClick={handleClick} className="btn">
          7
        </button>
        <button id="eight" onClick={handleClick} className="btn">
          8
        </button>
        <button id="nine" onClick={handleClick} className="btn">
          9
        </button>
        <button id="subtract" onClick={handleClick} className="btn">
          -
        </button>
        <button id="four" onClick={handleClick} className="btn">
          4
        </button>
        <button id="five" onClick={handleClick} className="btn">
          5
        </button>
        <button id="six" onClick={handleClick} className="btn">
          6
        </button>
        <button id="add" onClick={handleClick} className="btn">
          +
        </button>
        <button id="one" onClick={handleClick} className="btn">
          1
        </button>
        <button id="two" onClick={handleClick} className="btn">
          2
        </button>
        <button id="three" onClick={handleClick} className="btn">
          3
        </button>
        <button id="equals" onClick={handleClick} className="btn equals">
          =
        </button>
        <button id="zero" onClick={handleClick} className="btn zero">
          0
        </button>
        <button id="decimal" onClick={handleClick} className="btn">
          .
        </button>
      </div>
    </div>
  );
};

export default App;
