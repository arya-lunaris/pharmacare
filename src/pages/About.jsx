import React, { useState, useEffect } from 'react';

function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center text-center">
      <h1
        className={`text-3xl font-bold text-gray-800 transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        About Us
      </h1>
      <p
        className={`mt-4 text-gray-600 transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        Welcome to Pharmacare. We’re dedicated to providing quality healthcare and trusted pharmacy services to our community.
      </p>
    </div>
  );
}

export default About;
