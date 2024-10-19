import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
//import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './assets/styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        
      </Routes>
    </Router>
  );
};

export default App;
