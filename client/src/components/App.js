import React, { useState } from 'react'
import Login from './Login'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Login />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
