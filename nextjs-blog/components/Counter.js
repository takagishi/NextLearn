import React, { useState } from 'react';

export const Counter = (props) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </>
  );
};
