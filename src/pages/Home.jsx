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
      text: "Pharmacy First service provided"
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
      <h1
        className="text-5xl font-normal text-[#5C427D] mb-5"
        style={getTransitionStyle(headingDelay)}
      >
        Welcome to PharmaCare
      </h1>
      <p
        className="text-gray-600 max-w-2xl mx-auto mb-15"
        style={getTransitionStyle(paragraphDelay)}
      >
        Your trusted local pharmacy for prescriptions, health advice, and wellness services. 
        At PharmaCare, we’re committed to providing personalized care for you and your family.
      </p>

      <div
        className="w-screen bg-[#A996CA] py-10 mb-10 -mx-8"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'opacity, transform',
        }}
      >
        <div className="relative mx-auto max-w-4xl flex items-center justify-center">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 hover:backdrop-blur-lg transition-colors mr-10 cursor-pointer"
          >
            &#8592;
          </button>
          <div className="flex-1 relative h-[400px] overflow-hidden rounded-3xl shadow-md">
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: i === currentIndex ? 1 : 0,
                  transform: i === currentIndex ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'opacity 400ms ease, transform 400ms cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 hover:backdrop-blur-lg transition-colors ml-10 cursor-pointer"
          >
            &#8594;
          </button>
        </div>

        <p
          className="max-w-lg mx-auto mt-4 text-lg transition-opacity duration-700 ease-in-out text-white font-normal"
          key={currentIndex}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)',
            willChange: 'opacity, transform',
          }}
        >
          {images[currentIndex].text}
        </p>
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/about')}
        className="px-6 py-3 bg-[#A996CA] text-white font-normal rounded-full transition-all cursor-pointer hover:ring-2 hover:ring-[#A996CA] hover:ring-offset-2 hover:ring-offset-white relative"
        style={{ ...getTransitionStyle(buttonDelay), top: '-20px' }}
      >
        Learn More
      </button>
    </div>
  );
}

export default Home;