import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 text-center">
          What is UpReach?
        </h2>
        
        <div className="bg-red-50 p-6 md:p-10 rounded-2xl shadow-md">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            UpReach is a heartfelt initiative dedicated to empowering underprivileged children and those in need. 
            Rooted in compassion, it aims to transform lives through education, care, and opportunities. 
            Every action counts, and every smile matters.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Education</h3>
            <p className="text-gray-600 text-center">Providing knowledge and skills to build a better future</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Care</h3>
            <p className="text-gray-600 text-center">Nurturing growth with love and compassion</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Opportunity</h3>
            <p className="text-gray-600 text-center">Creating pathways for sustainable change</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;