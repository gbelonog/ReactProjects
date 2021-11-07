import logo from './logo.svg';
import allYouNeedIsLove from './predictionsPics/allYouNeedIsLove.jpg';
import surprize from './predictionsPics/surprize.jpeg';
import meetNewFrends from './predictionsPics/meetNewFrends.jpeg';
import goodJob from './predictionsPics/goodJob.jpeg';
import keepCalm from './predictionsPics/keepCalm.jpeg';
import takeItEasy from './predictionsPics/takeItEasy.jpeg';
import neverGiveUp from './predictionsPics/neverGiveUp.jpeg';
import beStrong from './predictionsPics/beStrong.jpeg';
import willBeOk from './predictionsPics/willBeOk.jpeg';
import thinkPositive from './predictionsPics/thinkPositive.jpeg';

import './App.css';
import React, { useState } from 'react';

function App() {
  let [isShownLogo, showLogo] = useState( false );
  let [isShownPrediction, showPrediction] = useState( false );
  let [randomNumberOfPrediction, generateRandomNumber] = useState( 0 );

  function pushMeButtonHandler(){
    showLogo(!isShownLogo);
    showPrediction(!isShownPrediction);
  }

  function randomGenerator(){
    const randomNumberOfPrediction = Math.floor(Math.random() * 10);
    generateRandomNumber( randomNumberOfPrediction );
  
  }

  function predictionGenerator(randomNumberOfPrediction){
    const listOfPredictions = {
      0: "All you need is Love",
      1: "Surprize :)",
      2: "Meet with friend",
      3: "Good job",
      4: "Keep calm and dive",
      5: "Take it easy",
      6: "Never give up",
      7: "Be strong",
      8: "Will be ok",
      9: "Think positive",
    }
    return listOfPredictions[randomNumberOfPrediction];
  }
  function predictionPicGenerator(randomNumberOfPrediction){
    const predictionsPics = {
      0: allYouNeedIsLove,
      1: surprize,
      2: meetNewFrends,
      3: goodJob,
      4: keepCalm,
      5: takeItEasy,
      6: neverGiveUp,
      7: beStrong,
      8: willBeOk,
      9: thinkPositive,
    }
    return predictionsPics[randomNumberOfPrediction];
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>What will happen to you today?</p>
        <button onClick = {()=>{pushMeButtonHandler();randomGenerator();}}> Push me</button>
        { !isShownLogo && (<img src={ logo } className="App-logo" alt="logo" />) }
        { isShownPrediction && (
          <p>
            <p>Your prediction is: </p>
            <p>{ predictionGenerator(randomNumberOfPrediction) } </p> 
            <img src={ predictionPicGenerator(randomNumberOfPrediction) } className="PredictionPic" alt = ""></img> 
          
          </p>
          ) }
      </header>
    </div>
  );
}

export default App;
