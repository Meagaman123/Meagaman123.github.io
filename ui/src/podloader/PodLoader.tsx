import React from 'react';
import './css/PodLoader.css';
import ClashRoyale from '../clashroyale/ClashRoyale';
import PremierLeaguePredictions from '../prempredictions/PremierLeaguePredictions';


interface MainProps {
    selectedPod: number
}

const PodLoader = (props : MainProps) => {
    
    let selectedPod;
    switch (props.selectedPod) {
        case 2:
            selectedPod = <ClashRoyale />
            break;
        default:
            selectedPod = <PremierLeaguePredictions />
    }

    return (
        <div className='PodLoader'>
            {selectedPod}
        </div>
    );
}

export default PodLoader;