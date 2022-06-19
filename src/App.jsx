import { useState } from 'react'

function App() {
 
  const [calc, setCacl] = useState("");
  const [result, setResult] = useState("")

  const ops =['/', '*', '+', '-', '.', '%', '!']
  const updateCalc = value => {
    if ( ops.includes(value) && calc === '' || 
         ops.includes(value) && ops.includes(calc.slice(-1)))
       {
         return;
       }
        setCacl(calc + value);

        if (!ops.includes(value)){
          setResult(eval(calc + value).toString());
        }
  }
  
  const createDigits = () => {
    const digits = [];

    for (let i=1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

    return digits;
  }

  const calculate = () => {
    setCacl(eval(calc).toString());
  }
  const deleteLast = () => {
    if (calc == '') {
      return
    }
    const value = calc.slice(0, -1);
    setCacl(value);
  }

  const clearAll = () => {
    if (calc == '') {
      return
    }
    const value = calc.slice("");
    setCacl('');
  }
  return (
    <div>
      <divd className="container">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ''}&nbsp;
            { calc || "0"}

          </div>
          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            
            

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits">
            { createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => updateCalc('%')}>%</button>
            <button onClick={() => updateCalc('!')}>!</button>
            <button onClick={clearAll}>CL</button>

       
          </div>
        </div>

      </divd>
    </div>
  )
}

export default App
