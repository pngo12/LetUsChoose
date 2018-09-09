import React, { Component } from 'react';
import './App.css';
import HomeBody from './components/homepage/homebody'
import InputForm from './components/randomize-food/inputs'
import {Navbar, Footer, Feedback, About, Signup, Login,Search } from './index.js'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route path='/' render={HomeBody} exact />
            <Route path='/feedback' component={Feedback} />
            <Route path='/about' render={About} />
            <Route path='/food' component={InputForm} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/search' component={Search} />
          </Switch>
        <Footer />
    </div >
    );
  }
}

export default App;