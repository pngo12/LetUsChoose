import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Feedback from './components/feedback'
import About from './components/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Search from './components/randomize-food/search'



ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));

export {About, Feedback, Navbar, Footer, Search}
