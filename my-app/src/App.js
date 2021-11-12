import React from 'react';
import Content from './components';
import news from './news.json';
import './App.css';


function App() {
  function showNews(){
    const items = news.map((e) => 
      <div>
        <h1 className={e.id}>{e.title}</h1>
        {e.isSpecial && <h6 style={{ color: 'yellow' }}>It's a special news!!!!!!</h6>}
        <Content content={e.content}/>
        {e.categories.map(e => <li>{e.name}</li>)}
        {e.link && <a href={e.link}>{e.link}</a>}
        <p>{e.photo && <img src={e.photo+e.id} alt=''></img>}</p>
        <h7>Author {e.author}</h7>
        <h6>Date {e.dateCreated}</h6>
      </div>
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
            <div>{showNews()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
