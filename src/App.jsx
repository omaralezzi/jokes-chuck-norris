import React from 'react';

import Header from './components/Header';
import DropDown from './components/DropDown';
import Button from './components/Button';
import Joke from './components/Joke';

import './App.css';

const App = () => {
  return (
    <main>
      <Header />
      <Joke />
      <section>
        <DropDown />
        <Button />
      </section>
    </main>
  );
};

export default App;
