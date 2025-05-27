import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  images: {
    url: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({ 
  images, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoPlayInterval]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 text-center">
          Gallery
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 relative"
                >
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg md:text-xl font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 p-2 rounded-full shadow-md z-10 transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 p-2 rounded-full shadow-md z-10 transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  currentIndex === index ? 'bg-red-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;