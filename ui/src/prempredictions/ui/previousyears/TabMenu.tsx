import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/TabMenu.css';
import {SortTypes} from './Sorter';
import InfoButton from './InfoButton';

interface Props {
    sortType: typeof SortTypes
    setPointChosen: React.Dispatch<React.SetStateAction<string>>
}

const TabMenu = (props: Props) => {
    const [sortChosen, setSortChosen] = useState(Object.keys(SortTypes)[0])
    const [openPopup, setOpenPopup] = useState("")

    function clickHandler(sortType: string) {
        setSortChosen(sortType)
        props.setPointChosen(sortType)
    }

    const listOfSorts: JSX.Element[] = []

    for (const sortType in SortTypes) {
        listOfSorts.push(
            <div className={`TabMenu_Item ${sortChosen === sortType ? 'TabMenu_Item-selected': ''}`}>
            <div className={`TabMenu_Button`} title={sortType} onClick={() => {clickHandler(sortType)}}>{sortType} </div>
            <InfoButton sortType={sortType} description={SortTypes[sortType].description} openPopup={openPopup} setOpenPopup={setOpenPopup}></InfoButton>
        </div>
        )
    }

  return (
    <div className='TabMenu'>
        {listOfSorts}
    </div>
  );
}

export default TabMenu;