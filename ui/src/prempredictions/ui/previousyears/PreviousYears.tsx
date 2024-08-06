import '../../css/ui/previousyears/PreviousYears.css';
import { FakeResultData, PredictionData, Result } from '../../datautil/DataInterfaces';
import PillMenu from './PillMenu';
import { useState } from 'react';

interface Props {
  setYearChosen: React.Dispatch<React.SetStateAction<string>>
}

const PreviousYears = (props: Props) => {

  return (
    <div className='PreviousYears'>
        <div className='PreviousYears_Title'>Previous Years</div>
        <PillMenu resultsData={FakeResultData} setYearChosen={props.setYearChosen}/>
    </div>
  );
}
export default PreviousYears;