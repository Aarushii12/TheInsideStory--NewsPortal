import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  // State initialization for progress
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key={1} pageSize={9} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key={2} pageSize={9} country="in" category="business" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key={3} pageSize={9} country="in" category="health" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key={4} pageSize={9} country="in" category="sports" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key={5} pageSize={9} country="in" category="science" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key={6} pageSize={9} country="in" category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

