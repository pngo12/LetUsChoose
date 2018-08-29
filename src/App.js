import React, { Component } from 'react';
import './App.css';
import HeroHome from './components/herohome'
import Footer from './components/footer'
import HomeBody from './components/homebody'
import InputForm from './components/inputs'
import Data from './components/data'

class App extends Component {
  render() {
    return (
        <div>
        <HeroHome />
        <HomeBody />
        <InputForm />
        <Footer /> 
        </div >
    );
  }
}

export default App;
