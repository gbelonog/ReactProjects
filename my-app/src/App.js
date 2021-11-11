import React, { useState } from 'react';
import news from './news.json';
import './App.css';


function App() {
  //let [difImage, changeImage] = useState( false );
  // let [isShownPrediction, showPrediction] = useState( false );
  
  function cleanContent(content){
    return content.split('<p>').map(e=><p>{e.replace('</p>','')}</p>);
  }

  function showNews(){
    const items = news.map((e) => 
      <p>
        <h className={e.id}>{e.title}</h>
        {e.isSpecial && <h6 style={{ color: 'yellow' }}>It's a special news!!!!!!</h6>}
        {cleanContent(e.content)}
        {e.categories.map(e => <li>{e.name}</li>)}
        {e.link && <a href={e.link}>{e.link}</a>}
        <p>{e.photo && <img src={`${e.photo}&key=${e.id}`} alt=''></img>}</p>
        <p>{e.photo && <img src={e.photo+e.id} alt=''></img>}</p>
        <h6>Author {e.author}</h6>
      </p>
    );
    console.log(items);
    news.forEach((e)=>{console.log(e);});
    return items;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="HeaderBlock">
          <p>Today news</p>
        </div>
        <div>
            <p>{showNews()}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
