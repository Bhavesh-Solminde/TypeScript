import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
    </div>
  );
};

export default Counter;
