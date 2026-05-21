import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import VisionMission from './components/VisionMission';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PromotersPage from './components/PromotersPage';
import ContactPage from './components/ContactPage';
import EnergyPage from './components/EnergyPage';
import WaterPage from './components/WaterPage';
import EnvironmentPage from './components/EnvironmentPage';

// Placeholder for pages not yet built
const ComingSoon = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-white pt-24">
    <div className="text-center">
      <div className="w-20 h-20 bg-natureGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">🌿</span>
      </div>
      <h1 className="text-4xl font-heading font-extrabold text-darkGreen mb-4">{title}</h1>
      <p className="text-gray-500 text-lg">This section is coming soon.</p>
    </div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <Highlight />
      <VisionMission />
      <Welcome />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-darkBlue bg-lightGray overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/about"       element={<AboutUs />} />
          <Route path="/energy"      element={<EnergyPage />} />
          <Route path="/water"       element={<WaterPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/promoters"   element={<PromotersPage />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
