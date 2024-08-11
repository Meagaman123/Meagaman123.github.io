import React from 'react';
import { useState } from 'react';
import '../../css/ui/previousyears/TabMenuIndividualScore.css';
import {SortTypes} from './Sorter';
import InfoButton from './InfoButton';
import InfoButtonIndividual from './InfoButtonIndividual';

interface Props {
    sortType: typeof SortTypes
    setPointChosen: React.Dispatch<React.SetStateAction<string>>
}

const TabMenuIndividualScore = (props: Props) => {
    const [sortChosen, setSortChosen] = useState(Object.keys(SortTypes)[0])
    const [openPopup, setOpenPopup] = useState("")

    function clickHandler(sortType: string) {
        setSortChosen(sortType)
        props.setPointChosen(sortType)
    }

    const listOfSorts: JSX.Element[] = []

    for (const sortType in SortTypes) {
        listOfSorts.push(
            <div className={`TabMenuIndividualScore_Item ${sortChosen === sortType ? 'TabMenuIndividualScore_Item-selected': ''}`}>
            <div className={`TabMenuIndividualScore_Button`} title={sortType} onClick={() => {clickHandler(sortType)}}>{sortType} </div>
            <InfoButtonIndividual sortType={sortType} description={SortTypes[sortType].description} openPopup={openPopup} setOpenPopup={setOpenPopup}></InfoButtonIndividual>
        </div>
        )
    }

  return (
    <div className='TabMenuIndividualScore'>
        {listOfSorts}
    </div>
  );
}

export default TabMenuIndividualScore;