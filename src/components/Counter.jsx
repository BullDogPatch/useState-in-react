import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: 'auto' }}>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};

export default Counter;
