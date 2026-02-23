import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ProfilePage from './pages/ProfilePage'; 
import DetailsPage from './pages/DetailsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app-body">
          <div className="container">
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/projects" element={<DetailsPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;