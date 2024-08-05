import React from 'react';
import { useState } from 'react';
import './css/Header.css';

interface MainProps {
  setPodLoader: React.Dispatch<React.SetStateAction<number>>
}

const Header = (props: MainProps) => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  function onclick(selectedIndex: number)  {
    setSelectedIndex(selectedIndex)
    props.setPodLoader(selectedIndex)
  }

  return (
    <div className='Header'>
      <div className={`Header_Button ${selectedIndex === 1 ? 'Header_Button-selected': ''}`} onClick={() => onclick(1)}>Premier League Predictions</div>
      <div className={`Header_Button ${selectedIndex === 2 ? 'Header_Button-selected': ''}`} onClick={() => onclick(2)}>ClashRoyale Leader Helper</div>
    </div>
  );
}

export default Header;