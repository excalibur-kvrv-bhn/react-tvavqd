import React, { useState } from 'react';

const useIncrementHook = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const setValue = () => {
    return setCount(count + 1);
  };
  return [count, setValue];
};

export default useIncrementHook;
