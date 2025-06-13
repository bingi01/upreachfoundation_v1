import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white z-0"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-2 animate-fadeIn">
          UpReach Foundation
        </h1>
        <p className="text-xl md:text-2xl text-red-500 mb-6 italic animate-fadeIn animation-delay-200">
          sharing smiles..
        </p>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-400">
          A step towards a brighter, kinder world.
        </h2>
        
        <button 
          className="bg-red-600 text-white px-8 py-3 rounded-full font-medium mx-auto 
                    hover:bg-red-700 transition-all duration-300 animate-fadeIn animation-delay-600
                    transform hover:scale-105"
        >
          Stay Tuned
        </button>
      </div>
    </section>
  );
};

export default Hero;