import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key={1} pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key={2} pageSize={9} country="in" category="business" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key={3} pageSize={9} country="in" category="health" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key={4} pageSize={9} country="in" category="sports" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key={5} pageSize={9} country="in" category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key={9} pageSize={9} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
