import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ProfilePage from './pages/ProfilePage'; // Move your current profile UI here
import ProjectsPage from './pages/ProjectsPage'; // A new page for your IT work

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app-body">
          <div className="container">
            <Routes>
              {/* Home / Profile Path */}
              <Route path="/" element={<ProfilePage />} />
              
              {/* Projects Path (e.g., your Solar or IT Gadget work) */}
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;