import React, { useState } from 'react';
import '../../css/ui/previousyears/InfoButtonIndividual.css';
import InfoPopupDark from './InfoPopupDark';

interface Props {
    sortType: string
    description: string
    openPopup: string
    setOpenPopup: React.Dispatch<React.SetStateAction<string>>
}

const InfoButtonIndividual = (props: Props) => {

    function clickHandler() {
        if(props.openPopup  === props.sortType){
            props.setOpenPopup("")
        } else {
            props.setOpenPopup(props.sortType)
        }
    }

    let popup = null;
    if(props.openPopup === props.sortType){
        popup = <InfoPopupDark description={props.description}></InfoPopupDark>
    }

    
  return (
    <div className='InfoButtonIndividual' onClick={clickHandler}>
        {popup}
    </div>
  );
}

export default InfoButtonIndividual;