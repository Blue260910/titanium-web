import logo from './logo.svg';
import React from 'react';
import Header from './Components/Header/Header';
import Apresentacao from './Components/Apresentacao';
import Sessao2 from './Components/Sessao2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentacao />
      <Sessao2 />
    </div>
  );
}

export default App;
