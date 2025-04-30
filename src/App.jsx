import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Guest from './components/Guest/Guest';
import Animal from './components/Animal/Animal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/animal" element={<Animal />} />
      </Routes>
    </Router>
  );
};
export default App;