import React, { useState } from 'react';
import './Bottom.css';

const Bottom = ({ setEquation, setAnswer, equation}) => {

  const [first, setFirst] = useState(true);
  const [operator, setOperator] = useState(true);

  const handleEquation = (value) => {
    if (first && value !== 0 && equation !== "") {
      setEquation((prevNumber) => prevNumber + value);
      setFirst(false);
      setOperator(false)
    }
    if (value !== 0){
      setEquation((prevNumber) => prevNumber + value);
      setFirst(false);
      setOperator(false)
    }
    if (!first && value === 0 && !operator){
      setEquation((prevNumber) => prevNumber + value);
      setOperator(false)
    }
  };

  const handleOperator = (value) => {
    if(!operator){
      setEquation((currentEquation) => currentEquation + value);
      setOperator(true)
    }
  }
  

  const clear = () => {
    setEquation("");
    setFirst(true)
  };

  const calculate = () => {
    if(!operator){
      if(eval(equation)>100000){
        setAnswer('.....')
      } else{
        setAnswer(eval(equation));
      }
      setFirst(true)
      clear();
    }
  };

  return (
    <div className='body d-flex justify-content-center'>
      <div className='row-1'>
        <button className='equation' onClick={() => handleEquation(0)}>0</button>
        <button className='equation' onClick={() => handleEquation(1)}>1</button>
        <button className='equation' onClick={() => handleEquation(2)}>2</button>
        <button className='equation' onClick={() => handleEquation(3)}>3</button>
      </div>
      <div className='row-2'>
        <button className='equation' onClick={() => handleEquation(4)}>4</button>
        <button className='equation' onClick={() => handleEquation(5)}>5</button>
        <button className='equation' onClick={() => handleEquation(6)}>6</button>
        <button className='equation' onClick={() => handleEquation(7)}>7</button>
      </div>
      <div className='row-3'>
        <button className='equation' onClick={() => handleEquation(8)}>8</button>
        <button className='equation' onClick={() => handleEquation(9)}>9</button>
        <button className='equation' onClick={() => handleOperator('*')}>*</button>
        <button className='equation' onClick={() => handleOperator('/')}>/</button>
      </div>
      <div className='row-4'>
        <button className='equation' onClick={() => handleOperator('+')}>+</button>
        <button className='equation' onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => calculate()} className='equation'>Enter</button>
        <button onClick={() => clear()} className='equation'>Clr</button>
      </div>
    </div>
  );
};

export default Bottom;
