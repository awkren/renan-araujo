import React from 'react';
import './App.css';
import Content from './page-structure/Content';
import Header from './page-structure/Header';
import Name from './page-structure/Name';

function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <Content/>
    </div>
  );
}

export default App;
