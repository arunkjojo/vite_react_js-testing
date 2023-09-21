import { Fragment, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Fragment>
      <h1>Hello World</h1>
      <h3>Hello Arun</h3>
      <span data-testid="span">{count}</span>
      <input type="text" />
      <button onClick={increaseCount}>Submit</button>
    </Fragment>
  );
}

export default App;
