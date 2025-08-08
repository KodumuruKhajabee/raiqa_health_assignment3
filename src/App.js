import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (count > 0) {
      setList([...list, count]);
      setCount(0);
    }
  };

  const sortedList = [...list].sort((a, b) => a - b);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={handleAdd}>Add</button>

      <h3>Sorted List:</h3>
      <ul>
        {sortedList.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
