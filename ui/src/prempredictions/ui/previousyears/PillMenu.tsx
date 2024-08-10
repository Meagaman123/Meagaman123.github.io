import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/PillMenu.css';
import { Data } from '../../datautil/DataInterfaces';

interface Props {
    data: Data
    setYearChosen: React.Dispatch<React.SetStateAction<string>>
}

const PillMenu = (props: Props) => {
    const [selectedYear, setSelectedIndex] = useState(Object.keys(props.data)[0])

    function clickHandler(selectedIndex: string) {
        setSelectedIndex(selectedIndex)
        props.setYearChosen(selectedIndex)
    }
    
    const years = []
    for (const key in props.data) {
        years.push(key)
    }

    const listOfYears = years.map(resultsData => 
        <div className={`PillMenu_Button ${selectedYear === resultsData ? 'PillMenu_Button-selected': ''}`} onClick={() => {clickHandler(resultsData)}}>{resultsData} </div>
    );

  return (
    <div className='PillMenu'>
        {listOfYears}
    </div>
  );
}

export default PillMenu;