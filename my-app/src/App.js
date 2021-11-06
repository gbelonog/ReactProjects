import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [isShownLogo, showLogo] = useState( false );
  let [isShownPrediction, showPrediction] = useState( false );
  function pushMeButtonHandler(){
    showLogo(!isShownLogo);
    showPrediction(!isShownPrediction);
  }
  function predictionGenerator(){
    const randomNumberOfPrediction = Math.floor(Math.random() * 10);
    const listOfPredictions = {
      0: "Love",
      1: "Surprize",
      2: "Met with friend",
      3: "Good job",
      4: "Keep calm and dive",
      5: "Take it easy",
      6: "Never give up",
      7: "Be strong",
      8: "will be ok",
      9: "think positive",
    }

    return listOfPredictions[randomNumberOfPrediction];
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>What will happen to you today?</p>
        <button onClick = {() => pushMeButtonHandler()}>Push me</button>
        {!isShownLogo && (<img src={logo} className="App-logo" alt="logo" />)}
        {isShownPrediction && (
          <p>
            <p>Your rediction is: </p>
            <p> {predictionGenerator()}</p>
          </p>
          )}
      </header>
    </div>
  );
}

export default App;
