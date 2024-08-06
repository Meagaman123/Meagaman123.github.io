import './css/PremierLeaguePredictions.css';
import { useState } from 'react';
import SubHeader from './ui/SubHeader';
import PreviousYears from './ui/previousyears/PreviousYears';
import CurrentYear from './ui/currentyear/CurrentYear';
import Results from './ui/previousyears/Results';
import { FakeResultData, PredictionData, Result } from './datautil/DataInterfaces';
import sortResults from './datautil/DataContructor';

const PremierLeaguePredictions = () => {
    const [subHeaderChosen, setSubHeaderChosen] = useState(1)
    const [yearChosen, setYearChosen] = useState(FakeResultData[0].year)

    function setSelectedPod(){
        switch (subHeaderChosen) {
            case 2:
                return <PreviousYears setYearChosen={setYearChosen}/> 
        
            default:
                return <CurrentYear />
        }
    }
    
    let resultsSorted: Result[] = [];
    for (const result of FakeResultData) {
        if(result.year === yearChosen){
            resultsSorted = sortResults("Diffrence", PredictionData, result)
        }
    }

  return (
    <div className='PremierLeaguePredictions'>
        <SubHeader setSubHeaderChosen = {setSubHeaderChosen} />
        {setSelectedPod()} 
        {subHeaderChosen === 2 && <Results results={resultsSorted}/>}
    </div>
  );
}

export default PremierLeaguePredictions;
