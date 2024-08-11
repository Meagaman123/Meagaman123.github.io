import React from 'react';
import '../../css/ui/previousyears/Results.css';
import { Prediction, Result, TeamPosition } from '../../datautil/DataInterfaces';
import NameButton from './NameButton';

interface Props {
  data: { result: TeamPosition[]; predictions: Prediction; }
  results: Result[]
}

const Results = (props: Props) => {

  const listOfReults = props.results.map((results, index) =>
    <><div className={`Results_Image ${index === 0 ? "Results_Image-gold" : "" || index === 1 ? "Results_Image-silver" : "" || index === 2 ? "Results_Image-bronze" : ""}`}></div><NameButton name={results.name} data={props.data}></NameButton><div className={`Results_Points`}>{results.points} </div></>
  );

  return (
    <div className='Results'>
      <div className={`Results_Title`}></div>
      <div className={`Results_Title`}>Name </div>
      <div className={`Results_Title`}>Points </div>
      {listOfReults}
    </div>
  );
}

export default Results;