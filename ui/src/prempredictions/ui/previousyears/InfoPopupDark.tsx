import React from 'react';
import '../../css/ui/previousyears/InfoPopupDark.css';

interface Props {
    description: string
}

const InfoPopupDark = (props: Props) => {

  return (
    <div className='InfoPopupDark'>
        <div className='InfoPopupDark_Nib'></div>
        <div className='InfoPopupDark_Description'>{props.description}</div>
    </div>
  );
}

export default InfoPopupDark;