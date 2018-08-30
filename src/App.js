import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomeBody from './components/homebody'
import InputForm from './components/inputs'
import Feedback from './components/feedback'
import About from './components/about'
import HeroBody from './components/herobody'

const HOME_PAGE = 'HOME_PAGE'
const ABOUT_PAGE = 'ABOUT_PAGE'
const FEEDBACK_PAGE = 'FEEDBACK_PAGE'
const INPUT_PAGE = "INPUT_PAGE"

class App extends Component {

  state = {
    page: HOME_PAGE,
    feedBack: []
  }

  addtoFeedback = feedback => {
    let newFeedback = [...this.state.feedBack, feedback];
    this.setState({
        feedback: newFeedback
    });
}

  changePage = name => {
    this.setState({
      page: name
    });
  };

  selectPage = pageName => {
    switch (pageName) {
      case HOME_PAGE:
        return (
          <div>
            <Navbar 
            changePage={this.changePage}
            />
            <HeroBody 
            changePage={this.changePage}
            />
            <HomeBody 
            changePage={this.changePage}
            />
            <Footer 
            changePage={this.changePage}
            />
          </div>
        );
        case ABOUT_PAGE:
          return (
            <div>
              <Navbar 
              changePage={this.changePage}
              />
              <About 
              changePage={this.changePage}
              />
              <Footer 
              changePage={this.changePage}
              />
              </div>
          );
          case FEEDBACK_PAGE:
          return (
            <div>
              <Navbar 
              changePage={this.changePage}
              />
              <Feedback 
              addtoFeedback = {this.addtoFeedback}
              changePage={this.changePage}
              />
              <Footer 
              changePage={this.changePage}
              />
              </div>
          );
          case INPUT_PAGE:
          return (
            <div>
              <Navbar 
              changePage={this.changePage}
              />
              <InputForm
              changePage={this.changePage}
              />
              <Footer 
              changePage={this.changePage}
              />
              </div>
          );
    }
  }


  render() {
    return (
      <div>
        {this.selectPage(this.state.page)}
      </div >
    );
  }
}

export default App;
