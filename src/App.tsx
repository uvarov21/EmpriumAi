import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Survey from './components/Survey';

function App() {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  const handleCloseSurvey = () => {
    setShowSurvey(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onStartSurvey={handleStartSurvey} />
      <Hero onStartSurvey={handleStartSurvey} />
      <Services onStartSurvey={handleStartSurvey} />
      <UseCases onStartSurvey={handleStartSurvey} />
      <About onStartSurvey={handleStartSurvey} />
      <Testimonials onStartSurvey={handleStartSurvey} />
      <Contact />
      <Footer />
      {showSurvey && <Survey onClose={handleCloseSurvey} />}
    </div>
  );
}

export default App;