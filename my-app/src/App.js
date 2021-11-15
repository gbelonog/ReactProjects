import React from 'react';
import directories from './directories.json';
import './App.css';
import ShowDirs from "./components/showDirs"


function App() {
  return (
    <div className="App">
      <ShowDirs directories={directories}/>
    </div>
  );
}

export default App;
