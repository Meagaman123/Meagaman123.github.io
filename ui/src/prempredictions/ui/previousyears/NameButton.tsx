import React, { useState } from 'react';
import '../../css/ui/previousyears/NameButton.css';
import IndividualScorePopup from './IndividualScorePopup';
import { Prediction, TeamPosition } from '../../datautil/DataInterfaces';

interface Props {
    data: { result: TeamPosition[]; predictions: Prediction; }
    name: string
}

const NameButton = (props: Props) => {
    const [popupOpen, setPopupOpen] = useState(false)

    function clickHandler() {
        setPopupOpen(true)
    }

    let popup = null

    if(popupOpen){
        popup = <IndividualScorePopup setPopupOpen={setPopupOpen} data={props.data} name={props.name}></IndividualScorePopup>
    }

  return (
    <div className={`NameButton`} onClick={clickHandler}> {props.name}
        {popup}
    </div>
  );
}

export default NameButton;