import { useState } from "react";

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, onIncrement, onDecrement };
};
