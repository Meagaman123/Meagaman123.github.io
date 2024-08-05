import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './header/Header';
import PodLoader from './podloader/PodLoader';

function App() {
  const [selectedPod, setPodLoader] = useState(1)

  return (
    <div className="App">
      <Header setPodLoader= {setPodLoader}/>
      <PodLoader selectedPod = {selectedPod} />
    </div>
  );
}

export default App;
