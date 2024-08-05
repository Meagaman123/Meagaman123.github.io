import React from 'react';
import './css/PodLoader.css';
import ClashRoyale from '../clashroyale/ClashRoyale';
import PremierLeaguePredictions from '../prempredictions/PremierLeaguePredictions';


interface MainProps {
    selectedPod: number
}

const PodLoader = (props : MainProps) => {

    function setSelectedPod(){
        switch (props.selectedPod) {
            case 2:
                return <ClashRoyale />
        
            default:
                return <PremierLeaguePredictions />
        }
    }

    return (
        <div className='PodLoader'>
            {setSelectedPod()}
        </div>
    );
}

export default PodLoader;