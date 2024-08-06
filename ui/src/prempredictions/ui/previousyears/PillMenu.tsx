import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/PillMenu.css';
import { Prediction, Positions } from '../../datautil/DataInterfaces';

interface Props {
    resultsData: Positions[]
    setYearChosen: React.Dispatch<React.SetStateAction<string>>
}

const PillMenu = (props: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(props.resultsData[0].year)

    function clickHandler(selectedIndex: string) {
        setSelectedIndex(selectedIndex)
        props.setYearChosen(selectedIndex)
    }

    const listOfYears = props.resultsData.map(resultsData => 
        <div className={`PillMenu_Button ${selectedIndex === resultsData.year ? 'PillMenu_Button-selected': ''}`} onClick={() => {clickHandler(resultsData.year)}}>{resultsData.year} </div>
    );

  return (
    <div className='PillMenu'>
        {listOfYears}
    </div>
  );
}

export default PillMenu;