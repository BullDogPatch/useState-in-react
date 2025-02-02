import Counter from './components/Counter';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='app'>
      <Header />
      <Form />
      <button
        style={{ width: '100px', margin: '0 auto' }}
        onClick={() => setShow((p) => !p)}
      >
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
