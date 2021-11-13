import React from 'react';
import {Content, Category, Link, Photo, Title, Author, DateCreated} from './components';
import news from './news.json';
import './App.css';

function App() {
  function showNews(){
    const items = news.map((e) => 
      <div>
        <Title title={e.title} isSpecial={e.isSpecial}/>
        <Content content={e.content}/>
        <Category category={e.categories}/>
        <Link link={e.link}/>
        <Photo photo={e.photo} id={e.id}/>
        <Author athor={e.author}/>
        <DateCreated dateCreated={e.dateCreated}/>
      </div>
    );
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
