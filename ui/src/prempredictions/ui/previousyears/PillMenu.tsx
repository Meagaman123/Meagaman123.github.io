import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/PillMenu.css';

const allYears = [{
        year: "2023/2024",
        id: 0
    },{
        year: "2022/2023",
        id: 1
    }
];

const PillMenu = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    function clickHandler(selectedIndex: number) {
        setSelectedIndex(selectedIndex)
    }

    const listOfYears = allYears.map(allYears => 
        <div className={`PillMenu_Button ${selectedIndex === allYears.id ? 'PillMenu_Button-selected': ''}`} onClick={() => {clickHandler(allYears.id)}}>{allYears.year} </div>
    );

  return (
    <div className='PillMenu'>
        {listOfYears}
    </div>
  );
}

export default PillMenu;