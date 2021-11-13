import React from 'react';
import {Content, Category, Link, Photo, Title, Author, DateCreated} from './components';
import news from './news.json';
import './App.css';

function App() {
  function showNews(){
    const items = news.map((e) => 
      <div key={e.id}>
        <Title title={e.title} isSpecial={e.isSpecial} id={e.id}/>
        <Content content={e.content} id={e.id}/>
        <Category category={e.categories} id={e.id}/>
        <Link link={e.link} id={e.id}/>
        <Photo photo={e.photo} id={e.id}/>
        <Author athor={e.author} id={e.id}/>
        <DateCreated dateCreated={e.dateCreated} id={e.id}/>
      </div>
    );
    return items;
  }
  
  return (
    <div className="App">
      <header className="App-header">
          <h1>Today news</h1>
      </header>
      <div>
        <div className="News">{showNews()}</div>
      </div>
    </div>
  );
}

export default App;
