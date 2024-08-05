import React from 'react';
import { useState } from 'react';
import '../css/ui/SubHeader.css';

interface MainProps {
  setSubHeaderChosen: React.Dispatch<React.SetStateAction<number>>
}

const SubHeader = (props: MainProps) => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  function onclick(selectedIndex: number)  {
    setSelectedIndex(selectedIndex)
    props.setSubHeaderChosen(selectedIndex)
  }

  return (
    <div className='SubHeader'>
      <div className={`SubHeader_Button ${selectedIndex === 1 ? 'Header_Button-selected': ''}`} onClick={() => onclick(1)}>Current Year</div>
      <div className={`SubHeader_Button ${selectedIndex === 2 ? 'Header_Button-selected': ''}`} onClick={() => onclick(2)}>Previous Years Results</div>
    </div>
  );
}

export default SubHeader;