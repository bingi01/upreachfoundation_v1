import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import { carouselImages } from './data/images';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'UpReach Foundation - Sharing Smiles';
    
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        opacity: 0;
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <About />
      <ImageCarousel images={carouselImages} />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;