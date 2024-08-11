import React from 'react';
import '../../css/ui/previousyears/InfoPopup.css';

interface Props {
    description: string
}

const InfoPopup = (props: Props) => {

  return (
    <div className='InfoPopup'>
        <div className='InfoPopup_Nib'></div>
        <div className='InfoPopup_Description'>{props.description}</div>
    </div>
  );
}

export default InfoPopup;