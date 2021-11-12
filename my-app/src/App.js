import React, { useState } from 'react';
import directories from './directories.json';
import './App.css';


function App() {
  function showDirs(childrenInside){
    const items = childrenInside.map((e) => 
      (e.type==="dir")?
      <ul>
        <li key={e.id}>
          {e.type} {e.name}
            {showDirs(e.children)}
        </li> 
      </ul>
  
    :
      <ul>
        <li key={e.id}>
          {e.type} {e.name}
        </li>
      </ul>

       
    );
    return items;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{showDirs(directories)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
