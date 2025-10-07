import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

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

  return (
    <div className="p-8 text-center">
      <h1
        className="text-4xl font-bold text-gray-800 mb-5"
        style={getTransitionStyle(headingDelay)}
      >
        Welcome to Pharmacare
      </h1>
      <p
        className="text-gray-600 max-w-2xl mx-auto mb-15"
        style={getTransitionStyle(paragraphDelay)}
      >
        Your trusted local pharmacy for prescriptions, health advice, and wellness services. 
        At Pharmacare, we’re committed to providing personalized care for you and your family.
      </p>

      <img
        src="/images/pharmacist.jpg"
        alt="Pharmacist helping a customer"
        className="mx-auto max-w-lg rounded-lg shadow-md mb-10"
        style={getTransitionStyle(imageDelay)}
      />

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