import Heading from './Heading';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [bgColour, setBgColour] = useState('antiquewhite');
  return (
    <header className='header' style={{ backgroundColor: bgColour }}>
      <Heading />
      <button
        onClick={() =>
          setBgColour(bgColour === 'antiquewhite' ? 'red' : 'antiquewhite')
        }
      >
        change backgound colour
      </button>
    </header>
  );
};

export default Header;
