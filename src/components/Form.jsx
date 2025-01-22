import { useState } from 'react';

const Form = () => {
  const [text, setText] = useState('');
  return (
    <>
      <p>{text}</p>
      <form>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </>
  );
};

export default Form;
