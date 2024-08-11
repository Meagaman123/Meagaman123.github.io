import React, { useState } from 'react';
import '../../css/ui/previousyears/InfoButton.css';
import InfoPopup from './InfoPopup';

interface Props {
    sortType: string
    description: string
    openPopup: string
    setOpenPopup: React.Dispatch<React.SetStateAction<string>>
}

const InfoButton = (props: Props) => {

    function clickHandler() {
        if(props.openPopup  === props.sortType){
            props.setOpenPopup("")
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