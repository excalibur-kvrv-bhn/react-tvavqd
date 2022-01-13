import React, { useEffect, useState } from 'react';
import useIncrementHook from './common/useIncrementHook';

const Counter = (props) => {
  const [count, setCount] = useIncrementHook(0);
  const [count1, setCount1] = useIncrementHook(0);

  useEffect(() => {
    console.log(`${count} times was clicked`);
  }, [count]);

  return (
    <div>
      <p>You clicked button1 {count} times </p>
      <p>You clicked button2 {count1} times </p>
      <button onClick={() => setCount()}>Click Me</button>
      <button onClick={() => setCount1()}>Click Me 2</button>
    </div>
  );
};

export default Counter;
