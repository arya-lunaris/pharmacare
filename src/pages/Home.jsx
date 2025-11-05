import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headingDelay = 0;
  const paragraphDelay = 150;
  const buttonDelay = 450;

  const getTransitionStyle = (delay) => ({
    transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)',
    transitionDelay: `${delay}ms`,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(32px)',
    willChange: 'opacity, transform',
  });

  const images = [
    {
      src: "/images/medical-delivery.jpg",
      alt: "Pharmacist assisting a patient",
      text: "Free same-day delivery for prescriptions"
    },
    {
      src: "/images/care-home.jpg",
      alt: "Medication and supplies on shelves",
      text: "Free medication audits for nursing and care homes"
    },
    {
      src: "/images/vaccinating.jpg",
      alt: "Pharmacist providing vaccination services",
      text: "Seasonal flu and COVID-19 vaccinations available"
    },
    {
      src: "/images/pharmacy-first.jpg",
      alt: "Pharmacy First consultation service",
      text: "Pharmacy First provided, no need for GP visits"
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="p-8 text-center">
      {/* Heading */}
      <h1
        className="text-5xl font-normal text-[#5C427D] mb-5"
        style={getTransitionStyle(headingDelay)}
      >
        Welcome to <span className="font-bold">Pharma</span>Care
      </h1>

      {/* Paragraph */}
      <p
        className="text-gray-600 max-w-2xl mx-auto mb-15"
        style={getTransitionStyle(paragraphDelay)}
      >
        Your trusted local pharmacy for prescriptions, health advice, and wellness services. 
        At PharmaCare, we’re committed to providing personalized care for you and your family.
      </p>

      {/* Carousel container */}
      <div
        className="relative flex items-center justify-center py-12 -mt-5 mb-4 mx-auto"
        style={{
          maxWidth: '1100px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'opacity, transform',
          height: '500px',
        }}
      >
        {/* Carousel arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-white/60 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center absolute left-[-140px] top-1/2 transform -translate-y-1/2 cursor-pointer hover:cursor-pointer transition-all shadow-md hover:bg-[#A996CA]/30 hover:shadow-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: '#A996CA', fontSize: '28px', lineHeight: 1 }}>&#8592;</span>
        </button>

        <div
          className="flex w-full h-full overflow-hidden"
          style={getTransitionStyle(200)}
        >
          {/* Left half (images) */}
          <div className="relative w-1/2 h-full rounded-l-full overflow-hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: i === currentIndex ? 1 : 0,
                  transform: 'none',
                  transition: 'opacity 600ms ease-in-out',
                  zIndex: 5,
                }}
                aria-hidden={i !== currentIndex}
              />
            ))}
          </div>

          {/* Right half (text) */}
          <div className="w-1/2 relative bg-[#A996CA] flex items-center justify-center rounded-r-full">
            <p
              className="text-white"
              key={currentIndex}
              style={{
                fontFamily: "'Museo Sans'",
                fontSize: '1.75rem',
                fontWeight: 800,
                maxWidth: '400px',
                margin: 0,
              }}
            >
              {images[currentIndex].text}
            </p>
          </div>
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-white/60 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center absolute right-[-140px] top-1/2 transform -translate-y-1/2 cursor-pointer hover:cursor-pointer transition-all shadow-md hover:bg-[#A996CA]/30 hover:shadow-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: '#A996CA', fontSize: '28px', lineHeight: 1 }}>&#8594;</span>
        </button>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center -mt-5 mb-15 space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'bg-[#A996CA] scale-125'
                : 'bg-[#A996CA]/40 hover:bg-[#A996CA]/80'
            }`}
          />
        ))}
      </div>

      {/* Learn More button */}
      <button
        onClick={() => navigate('/services')}
        className="px-6 py-3 bg-[#A996CA] text-white font-normal rounded-full transition-all cursor-pointer hover:ring-2 hover:ring-[#A996CA] hover:ring-offset-2 hover:ring-offset-white relative"
        style={{ ...getTransitionStyle(buttonDelay), top: '-20px' }}
      >
        Learn More
      </button>
    </div>
  );
}

export default Home;