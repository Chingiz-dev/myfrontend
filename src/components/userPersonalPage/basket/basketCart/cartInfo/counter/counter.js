import React, {useState} from 'react';
import style from './counter.module.css'

const Counter = () => {

  const [counter, setCounter] = useState(1)

  const addCounter = () => {
    setCounter(prevState => prevState + 1)
  }
  const subCounter = () => {
    setCounter(prevState => prevState - 1)
  }

  return (
      <div className={style.wrapper}>
        <div className={style.block} onClick={subCounter}>-</div>
        <div className={style.block}>{counter}</div>
        <div className={style.block} onClick={addCounter}>+</div>
      </div>
  );
};

export default Counter;