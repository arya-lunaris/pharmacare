import { useState, useEffect } from 'react';

function Facilities() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="py-16 flex flex-col items-center text-center">
      <h1
        className={`mb-16 text-4xl font-bold text-gray-800 transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        Facilities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto text-left">
        <div
          className={`p-10 rounded-3xl bg-[#00E0BD] text-white text-xl transition-all duration-700 ease-out transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-3xl font-semibold mb-4">Accessibility</h2>
          <ul className="space-y-5 list-none">
            <li><img src="/images/braille.png" alt="Braille translation service" className="inline-block w-8 h-8 mr-3 align-middle" />Braille translation service</li>
            <li><img src="/images/toilet.png" alt="Disabled toilet" className="inline-block w-8 h-8 mr-3 align-middle" />Disabled toilet</li>
            <li><img src="/images/hearing.png" alt="Induction loop" className="inline-block w-8 h-8 mr-3 align-middle" />Induction loop</li>
            <li><img src="/images/speech.png" alt="Text relay" className="inline-block w-8 h-8 mr-3 align-middle" />Text relay</li>
            <li><img src="/images/sign.png" alt="Signing service" className="inline-block w-8 h-8 mr-3 align-middle" />Signing service</li>
            <li><img src="/images/wheelchair.png" alt="Wheelchair access" className="inline-block w-8 h-8 mr-3 align-middle" />Wheelchair access</li>
            <li><img src="/images/steps.png" alt="Step-free access" className="inline-block w-8 h-8 mr-3 align-middle" />Step-free access</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div
            className={`p-10 rounded-3xl bg-[#00E0BD] text-white text-xl transition-all duration-700 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl font-semibold mb-4">Parking</h2>
            <ul className="space-y-5 list-none">
              <li><img src="/images/parking.png" alt="Car parking" className="inline-block w-8 h-8 mr-3 align-middle" />Car parking</li>   
              <li><img src="/images/disabled-parking.png" alt="Disabled parking" className="inline-block w-8 h-8 mr-3 align-middle" />Disabled parking</li>
              <li><img src="/images/bicycle.png" alt="Cycle parking" className="inline-block w-8 h-8 mr-3 align-middle" />Cycle parking</li>
            </ul>
          </div>

          <div
            className={`p-10 rounded-3xl bg-[#00E0BD] text-white text-xl transition-all duration-700 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <h2 className="text-3xl font-semibold mb-4">Other facilities</h2>
            <ul className="space-y-5 list-none">
              <li><img src="/images/consultation.png" alt="Private consultation room or area" className="inline-block w-8 h-8 mr-3 align-middle" />Private consultation room or area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;