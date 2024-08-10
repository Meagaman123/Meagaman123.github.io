import './css/PremierLeaguePredictions.css';
import { useState } from 'react';
import SubHeader from './ui/SubHeader';
import PreviousYears from './ui/previousyears/PreviousYears';
import CurrentYear from './ui/currentyear/CurrentYear';

const PremierLeaguePredictions = () => {
    const [subHeaderChosen, setSubHeaderChosen] = useState(1)

    let selectePod;
    switch (subHeaderChosen) {
        case 2:
            selectePod = <PreviousYears /> 
                break;
            default:
                selectePod = <CurrentYear />
        }

  return (
    <div className='PremierLeaguePredictions'>
        <SubHeader setSubHeaderChosen = {setSubHeaderChosen} />
        {selectePod}
    </div>
  );
}

export default PremierLeaguePredictions;
