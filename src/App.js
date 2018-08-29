import React, { Component } from 'react';
import './App.css';
import HeroHome from './components/herohome'
import Footer from './components/footer'
import HomeBody from './components/homebody'
import Input from './components/inputs'

class App extends Component {
  render() {
    return (
        <div>
        <HeroHome />
        <HomeBody />
        <Input />
        <Footer /> 
        </div >
    );
  }
}

export default App;
