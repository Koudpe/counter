import React, { useState } from "react";

const Counter = () => {
  const [items, setItems] = useState([]);
  const [values, setValues] = useState({ min: 0, max: 0, counting: 0 });

  const onClick = (event) => {
    event.preventDefault();
    const numbers = [];
    let firstNum = values.min;
    for (var i = values.min; i < values.max; i++) {
      firstNum = firstNum + values.counting;
      if (firstNum < values.max) numbers.push(firstNum);
    }
    setItems(numbers);
    setValues({ ...values, min: 0 });
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <p>Od:</p>
        <input
          type='text'
          value={values.min}
          onChange={(e) =>
            setValues({ ...values, min: Number(e.target.value) })
          }
        />
        <p>Do:</p>
        <input
          type='text'
          value={values.max}
          onChange={(e) =>
            setValues({ ...values, max: Number(e.target.value) })
          }
        />
        <p>Násobek:</p>
        <input
          type='text'
          value={values.counting}
          onChange={(e) =>
            setValues({ ...values, counting: Number(e.target.value) })
          }
        />
      </div>
      <textarea className='textarea' value={items} />

      <button
        onClick={(event) => {
          clear();
          onClick(event);
        }}
      >
        OK
      </button>
      <button onClick={clear}>Clear</button>

      {/* <p>min = {values.min}</p>
      <p>max = {values.max}</p>
      <p>násobení = {values.counting}</p> */}
    </div>
  );
};

export default Counter;
