import React from 'react';
import '../../css/ui/previousyears/Results.css';
import { Result } from '../../datautil/DataInterfaces';

interface Props {
  results: Result[]
}

const Results = (props: Props) => {

  const listOfReults = props.results.map(results =>
      <><div className={`Results_Name`}>{results.name} </div><div className={`Results_Points`}>{results.points} </div></>
  );

  return (
    <div className='Results'>
      <div className={`Results_Title`}>Name </div>
      <div className={`Results_Title`}>Points </div>
      {listOfReults}
    </div>
  );
}

export default Results;