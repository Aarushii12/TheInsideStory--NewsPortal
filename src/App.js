import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key={1} pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News key={2} pageSize={9} country="in" category="business" />} />
            <Route path="/health" element={<News key={3} pageSize={9} country="in" category="health" />} />
            <Route path="/sports" element={<News key={4} pageSize={9} country="in" category="sports" />} />
            <Route path="/science" element={<News key={5} pageSize={9} country="in" category="science" />} />
            <Route path="/technology" element={<News key={9} pageSize={9} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
