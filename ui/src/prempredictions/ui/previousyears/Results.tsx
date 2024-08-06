import React from 'react';
import '../../css/ui/previousyears/Results.css';
import { Result } from '../../datautil/DataInterfaces';

interface Props {
    results: Result[]
}

const Results = (props: Props) => {

    const listOfReults = props.results.map(results => 
        <div className={`Results_Item`}>{results.name + " " + results.points} </div>
    );

  return (
    <div className='Results'>
        {listOfReults}
    </div>
  );
}

export default Results;