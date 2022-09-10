import React, { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState("");
  const handelClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {};
  const calculate = () => {
    setResult(eval(result));
  };
  return (
    
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={backspace} id="backspace">
            C
          </button>
          <button name="/" onClick={handelClick}>
            &divide;
          </button>
          <button name="7" onClick={handelClick}>
            7
          </button>
          <button name="8" onClick={handelClick}>
            8
          </button>
          <button name="9" onClick={handelClick}>
            9
          </button>
          <button name="*" onClick={handelClick}>
            &times;
          </button>
          <button name="4" onClick={handelClick}>
            4
          </button>
          <button name="5" onClick={handelClick}>
            5
          </button>
          <button name="6" onClick={handelClick}>
            6
          </button>
          <button name="-" onClick={handelClick}>
            &ndash;
          </button>
          <button name="1" onClick={handelClick}>
            1
          </button>
          <button name="2" onClick={handelClick}>
            2
          </button>
          <button name="3" onClick={handelClick}>
            3
          </button>
          <button name="+" onClick={handelClick}>
            +
          </button>
          <button name="0" onClick={handelClick}>
            0
          </button>
          <button name="." onClick={handelClick}>
            .
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
  
  );
};