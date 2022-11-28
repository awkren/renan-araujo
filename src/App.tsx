import React from 'react';
import './App.css';
import Content from './page-structure/Content';
import ContentTwo from './page-structure/ContentTwo';
import Header from './page-structure/Header';
import Name from './page-structure/Name';

function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <Content/>
      <ContentTwo/>
    </div>
  );
}

export default App;
