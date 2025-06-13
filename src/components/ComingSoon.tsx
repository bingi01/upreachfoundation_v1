import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      emailjs.init("mAfa7rXiapWmt4zHk"); // Replace with your EmailJS public key
      
      // Send email notification to you
      await emailjs.send(
        "service_9hrzubs", // Replace with your EmailJS service ID
        "template_99cy24g", // Replace with your EmailJS template ID
        {
          to_email: "info.upreachfoundation@gmail.com",
          from_name: "UpReach Foundation",
          user_email: email,
          message: `New email subscription from UpReach Foundation: ${email}`,
          subject: "New UpReach Foundation Email Subscription"
        }
      );
      
      console.log('Email submitted:', email);
      setSubmitted(true);
      setError('');
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg transform transition-all">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Launching Soon
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Be part of something meaningful.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`w-full px-5 py-3 rounded-full border ${
                    error ? 'border-red-400' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-red-500 pr-12 ${
                    isLoading ? 'opacity-50' : ''
                  }`}
                  required
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`absolute right-1 top-1 bg-red-600 text-white p-2 rounded-full 
                            hover:bg-red-700 transition-colors duration-300 ${
                              isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                >
                  {isLoading ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <p className="text-gray-500 mt-3 text-sm">
                We'll notify you when we launch. No spam, we promise!
              </p>
            </form>
          ) : (
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700 text-lg">
                Thank you! We'll keep you updated about our launch.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;