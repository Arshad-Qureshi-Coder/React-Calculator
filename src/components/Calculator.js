
import React, {useState} from "react";
import  "./Calculator.css";


function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const validateInputs = () => {
    
      if (!num1 || !num2) {
        setErrorMessage(num1 ? 'Num 2 is empty.' : 'Num 1 is empty.');
        setResult('');
        setSuccessMessage('');
      } else {
        setErrorMessage('');
        let performOperation;

        switch (operation) {
          case '+':
            performOperation = num1 + num2;
            break;
          case '-':
            performOperation = num1 - num2;
            break;
          case '*':
            performOperation = num1 * num2;
            break;
          case '/':
            performOperation = num1 / num2;
            break;
          default:
            performOperation = '';
        }

        if (!isNaN(performOperation)) {
          let formattedResult = performOperation.toString();
        
          if (formattedResult.includes('.')) {
            // If the number has a decimal point
            formattedResult = parseFloat(formattedResult).toFixed(2);
          }
        
          setResult(formattedResult);
          setSuccessMessage('Success!');
        } else {
          setResult('');
        }
  }
}

const handleInputChange = (inputNumber, value) => {
  if (inputNumber === 1) {
    setNum1(value);
  } else if (inputNumber === 2) {
    setNum2(value);
  }

  // Clear result and messages when input fields are cleared
  setResult('');
  setErrorMessage('');
  setSuccessMessage('');
};
  
    return (
      <div className="main">
        <div className="container">
          <h2>React Calculator</h2>
        <input type="text" placeholder="Num 1" value={num1} onChange={e => handleInputChange(1,e.target.value)} />
        <input type="text" placeholder="Num 2" value={num2} onChange={e => handleInputChange(2,e.target.value)} />
        <div className="btn">
          <div className="div-btn">
          <button onClick={() => { setOperation('+'); validateInputs(); }}>+</button>
          </div>
          <div className="div-btn">
          <button onClick={() => { setOperation('-'); validateInputs(); }}>-</button>
          </div>
          <div className="div-btn">
          <button onClick={() => { setOperation('*'); validateInputs(); }}>*</button>
          </div>
          <div className="div-btn">
          <button onClick={() => { setOperation('/'); validateInputs(); }}>/</button>
          </div>
        </div>
        
  
        {errorMessage && (
        <div>
          <h3 className="error" style={{color: 'red'}}>Error!</h3>
          <p className="err-msg">{errorMessage}</p>
        </div>
      )}
      {successMessage && <p className="success" style={{color: 'blue'}}>{successMessage}</p>}
      {result && <p className="result">Result: {result}</p>}
      </div>
      </div>
      

      
    );
  }

  export default Calculator;