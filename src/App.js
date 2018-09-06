import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomeBody from './components/homepage/homebody'
import InputForm from './components/randomize-food/inputs'
import Feedback from './components/feedback'
import About from './components/about'
import Signup from './components/signup'
import Login from './components/login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    feedBack: []
  }

  addtoFeedback = feedback => {
    let newFeedback = [...this.state.feedBack, feedback];
    this.setState({
        feedback: newFeedback
    });
}
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
              <Switch>
                <Route path='/' render={HomeBody} exact />
                <Route path='/feedback' component={Feedback} />
                <Route path='/about' render={About} />
                <Route path='/food' component={InputForm} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
              </Switch>
          </div>
        </BrowserRouter>
      <Footer />
    </div >
    );
  }
}

export default App;
