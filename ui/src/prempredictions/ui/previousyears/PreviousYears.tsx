import '../../css/ui/previousyears/PreviousYears.css';
import { FakeData} from '../../datautil/DataInterfaces';
import PillMenu from './PillMenu';
import { useState } from 'react';
import Results from './Results';
import TabMenu from './TabMenu';
import { sortResults, SortType, SortTypes } from './Sorter';

const PreviousYears = () => {
  const [yearChosen, setYearChosen] = useState(Object.keys(FakeData)[0])
  const [sortChosen, setSortChosen] = useState(SortType.Diffrence)

  const sortedResults = sortResults(sortChosen, FakeData[yearChosen].predictions, FakeData[yearChosen].result)

  return (
    <div className='PreviousYears'>
        <div className='PreviousYears_Title'>Previous Years</div>
        <PillMenu data={FakeData} setYearChosen={setYearChosen}/>
        <TabMenu sortType={SortTypes} setPointChosen={setSortChosen}/>
        <Results results={sortedResults}/>
    </div>
  );
}
export default PreviousYears;