import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/TabMenu.css';
import { SortType, SortTypes } from './Sorter';

interface Props {
    sortType: typeof SortTypes
    setPointChosen: React.Dispatch<React.SetStateAction<SortType>>
}

const TabMenu = (props: Props) => {
    const [sortChosen, setSortChosen] = useState(SortTypes[0].sortType)

    function clickHandler(sortType: SortType) {
        setSortChosen(sortType)
        props.setPointChosen(sortType)
    }

    const listOfSorts = SortTypes.map(sortType => 
        <div className={`TabMenu_Button ${sortChosen === sortType.sortType ? 'TabMenu_Button-selected': ''}`} title={sortType.name} onClick={() => {clickHandler(sortType.sortType)}}>{sortType.name} </div>
    );

  return (
    <div className='TabMenu'>
        {listOfSorts}
    </div>
  );
}

export default TabMenu;