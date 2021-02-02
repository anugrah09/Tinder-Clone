import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Tindercards from './Tindercards'
import Swipebuttons from './Swipebuttons'

function Home() {
  return (
    <div className="App">
      <Header />
      <Tindercards />
      <Swipebuttons />
    </div>
  );
}

export default Home;
