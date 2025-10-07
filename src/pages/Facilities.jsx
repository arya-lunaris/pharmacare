import { useState, useEffect } from 'react';

function Facilities() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center text-center">
      <h1
        className={`mb-5 text-3xl font-bold text-gray-800 transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        Facilities
      </h1>

      <div
        className={`mt-6 p-6 rounded-3xl bg-[#00E0BD] text-white w-full max-w-xl transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
        <ul className="text-white space-y-2 list-disc list-inside">
          <li>Braille translation service</li>
          <li>Disabled parking</li>
          <li>Disabled toilet</li>
          <li>Induction loop</li>
          <li>Text relay</li>
          <li>Signing service</li>
          <li>Wheelchair access</li>
          <li>Step-free access</li>
        </ul>
      </div>

      <div
        className={`mt-6 p-6 rounded-3xl bg-[#00E0BD] text-white w-full max-w-xl transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        <h2 className="text-2xl font-semibold mb-2">Parking</h2>
        <ul className="text-white space-y-2 list-disc list-inside">
          <li>Car parking</li>
          <li>Cycle parking</li>
          <li>Disabled parking</li>
        </ul>
      </div>

      <div
        className={`mt-6 p-6 rounded-3xl bg-[#00E0BD] text-white w-full max-w-xl transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <h2 className="text-2xl font-semibold mb-2">Other facilities</h2>
        <ul className="text-white space-y-2 list-disc list-inside">
          <li>Private consultation room or area</li>
        </ul>
      </div>
    </div>
  );
}

export default Facilities;