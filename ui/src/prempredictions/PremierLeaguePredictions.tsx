import './css/PremierLeaguePredictions.css';
import { useState } from 'react';
import SubHeader from './ui/SubHeader';
import PreviousYears from './ui/previousyears/PreviousYears';
import CurrentYear from './ui/currentyear/CurrentYear';

const PremierLeaguePredictions = () => {
    const [subHeaderChosen, setSubHeaderChosen] = useState(1)
    
    function setSelectedPod(){
        switch (subHeaderChosen) {
            case 2:
                return <PreviousYears />
        
            default:
                return <CurrentYear />
        }
    }

  return (
    <div className='PremierLeaguePredictions'>
        <SubHeader setSubHeaderChosen = {setSubHeaderChosen} />
        {setSelectedPod()}     
    </div>
  );
}

export default PremierLeaguePredictions;
