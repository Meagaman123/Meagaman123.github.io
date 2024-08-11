import React, { useState } from 'react';
import '../../css/ui/previousyears/InfoButton.css';
import InfoPopup from './InfoPopup';
import { SortType } from './Sorter';

interface Props {
    sortType: SortType
    description: string
    openPopup: SortType
    setOpenPopup: React.Dispatch<React.SetStateAction<number>>
}

const InfoButton = (props: Props) => {

    function clickHandler() {
        if(props.openPopup  === props.sortType){
            props.setOpenPopup(-1)
        } else {
            props.setOpenPopup(props.sortType)
        }
    }

    let popup = null;
    if(props.openPopup === props.sortType){
        popup = <InfoPopup description={props.description}></InfoPopup>
    }

    
  return (
    <div className='InfoButton' onClick={clickHandler}>
        {popup}
    </div>
  );
}

export default InfoButton;