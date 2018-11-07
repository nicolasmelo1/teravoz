import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

//components
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Content from './components/content/content'
import axios from 'axios';
import config from './config'

class App extends Component {
    constructor (props){
        super(props);
        axios.defaults.baseURL = config.get().serverHost;
    }

    render() {
    return (
      <div className="full-height">
        <Header/>
            <div className="container-fluid">
                <Content/>
            </div>
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);
