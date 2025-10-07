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
  const imageDelay = 300;
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
      src: "/images/pharmacist.jpg",
      alt: "Pharmacist helping a customer",
      text: "Our friendly pharmacists are here to assist you."
    },
    {
      src: "/images/medicine.jpg",
      alt: "Medicine on shelves",
      text: "Wide range of medicines and health products available."
    },
    {
      src: "/images/consultation.jpg",
      alt: "Pharmacist consultation",
      text: "Personalized consultations to ensure the best care."
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
        className="text-4xl font-bold text-gray-800 mb-5"
        style={getTransitionStyle(headingDelay)}
      >
        Welcome to Pharmacare
      </h1>
      <p
        className="text-gray-600 max-w-2xl mx-auto mb-10"
        style={getTransitionStyle(paragraphDelay)}
      >
        Your trusted local pharmacy for prescriptions, health advice, and wellness services. 
        At Pharmacare, we’re committed to providing personalized care for you and your family.
      </p>

      <div
        className="w-screen bg-[#00E0BD] py-10 mb-10 -mx-8"
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
            className="bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition-colors mr-4 cursor-pointer"
          >
            &#8592;
          </button>
          <div
            className="rounded-3xl shadow-md overflow-hidden flex-1"
            style={{
              backgroundImage: `url(${images[currentIndex].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              transition: 'background-image 0.7s ease',
              ...getTransitionStyle(imageDelay),
            }}
          />
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition-colors ml-4 cursor-pointer"
          >
            &#8594;
          </button>
        </div>

        <p
          className="max-w-lg mx-auto mt-4 text-lg transition-opacity duration-700 ease-in-out text-white"
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
      </div>

      <button
        onClick={() => navigate('/about')}
        className="px-6 py-3 bg-[#00E0BD] text-white font-medium rounded-full hover:bg-teal-400 transition-colors cursor-pointer"
        style={getTransitionStyle(buttonDelay)}
      >
        Learn More
      </button>
    </div>
  );
}

export default Home;