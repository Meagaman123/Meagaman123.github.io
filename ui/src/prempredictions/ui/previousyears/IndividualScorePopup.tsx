import React, { useState } from 'react';
import '../../css/ui/previousyears/IndividualScorePopup.css';
import { Prediction, TeamPosition } from '../../datautil/DataInterfaces';
import { SortTypes } from './Sorter';
import TabMenuIndividualScore from './TabMenuIndividualScore';

interface Props {
    data: { result: TeamPosition[]; predictions: Prediction; }
    name: string
    setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const IndividualScorePopup = (props: Props) => {
    const [sortChosen, setSortChosen] = useState(Object.keys(SortTypes)[0])
    
    function clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        props.setPopupOpen(false)
    }

    const sortedIndivdualResults = props.data.predictions[props.name].sort((a, b) => a.position - b.position)

    const sortedPremTable = props.data.result.sort((a, b) => a.position - b.position)

    const table: JSX.Element[] = []

    for (let index = 0; index < sortedIndivdualResults.length; index++) {
        table.push(
            <>
                <div className={`IndividualScorePopup_TeamName`}>{sortedIndivdualResults[index].team}</div>
                <div className={`IndividualScorePopup_Position`}>{sortedIndivdualResults[index].position}</div>
                <div className={`IndividualScorePopup_TeamName`}>{sortedPremTable[index].team} </div>
                <div className={`IndividualScorePopup_Position`}>{sortedPremTable[index].position} </div>
                <div className={`IndividualScorePopup_Points`}>{SortTypes[sortChosen].calculatePoints([sortedIndivdualResults[index]], sortedPremTable)} </div>
            </>
        )
    }

    return (
        <div className={`IndividualScorePopup`}>
            <div className={`IndividualScorePopup_TopBar`}>
                <div className={`IndividualScorePopup_Cross`} onClick={(e) => clickHandler(e)}></div>
            </div>
            <div className={`IndividualScorePopup_Header`}>{props.name}</div>
            <TabMenuIndividualScore sortType={SortTypes} setPointChosen={setSortChosen}></TabMenuIndividualScore>
            <div className={`IndividualScorePopup_Table`}>
                <div className={`IndividualScorePopup_Title`}>Team</div>
                <div className={`IndividualScorePopup_Title`}>Position</div>
                <div className={`IndividualScorePopup_Title`}>Team </div>
                <div className={`IndividualScorePopup_Title`}>Position </div>
                <div className={`IndividualScorePopup_Title`}>Points </div>
                {table}
            </div>
        </div>
    );
}

export default IndividualScorePopup;