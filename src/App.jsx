import Counter from './components/Counter';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='app'>
      <Header />
      <button onClick={() => setShow((p) => !p)}>
        {show ? 'hide content' : 'show content'}
      </button>
      {show && (
        <>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </>
      )}
    </div>
  );
}

export default App;
