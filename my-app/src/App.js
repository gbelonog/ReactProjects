import React from 'react';
import { NewsPage } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Today news</h1>
      </header>
      <div className="News">
        <NewsPage />
      </div>
    </div>
  );
}

export default App;
