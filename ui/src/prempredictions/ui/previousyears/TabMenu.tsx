import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/TabMenu.css';
import { SortType, SortTypes } from './Sorter';
import InfoButton from './InfoButton';

interface Props {
    sortType: typeof SortTypes
    setPointChosen: React.Dispatch<React.SetStateAction<SortType>>
}

const TabMenu = (props: Props) => {
    const [sortChosen, setSortChosen] = useState(SortTypes[0].sortType)
    const [openPopup, setOpenPopup] = useState(-1 || SortType)

    function clickHandler(sortType: SortType) {
        setSortChosen(sortType)
        props.setPointChosen(sortType)
    }

    const listOfSorts = SortTypes.map(sortType => 
        <div className={`TabMenu_Item ${sortChosen === sortType.sortType ? 'TabMenu_Item-selected': ''}`}>
            <div className={`TabMenu_Button`} title={sortType.name} onClick={() => {clickHandler(sortType.sortType)}}>{sortType.name} </div>
            <InfoButton sortType={sortType.sortType} description={sortType.description} openPopup={openPopup} setOpenPopup={setOpenPopup}></InfoButton>
        </div>
    );

  return (
    <div className='TabMenu'>
        {listOfSorts}
    </div>
  );
}

export default TabMenu;