import React, { useState, useEffect } from 'react';

const VaccinationServices = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const baseTransition = 'opacity 0.6s ease, transform 0.6s ease';

  return (
    <div className="service-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1
        className="text-3xl font-bold text-gray-800"
        style={{
          marginBottom: '2rem',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: baseTransition,
          transitionDelay: '0s',
        }}
      >
        Vaccination Services
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        <section
          className="service-section"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #00E0BD',
            borderRadius: '2rem',
            padding: '2rem',
            maxWidth: '600px',
            textAlign: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: baseTransition,
            transitionDelay: '0.2s',
          }}
        >
          <h2 className="text-lg" style={{ marginBottom: '1rem' }}>
            Flu vaccination service: adults aged 18 years or over (NHS service)
          </h2>
          <p className="text-lg font-bold mb-2">
            Description:
          </p>
          <ul className="text-lg list-none p-0 mb-4">
            <li>Free flu vaccinations for adults aged 18 years or over who are eligible under NHS guidelines.</li>
            <li>Administered by qualified healthcare professionals.</li>
            <li>Helps protect against seasonal influenza and related complications.</li>
          </ul>
          <p className="text-lg font-bold mb-2">
            Details:
          </p>
          <ul className="text-lg list-none p-0">
            <li>Available during flu season, typically from September to March.</li>
            <li>Appointment required; please contact the pharmacy to book.</li>
            <li>Bring your NHS number and any relevant medical information.</li>
          </ul>
        </section>

        <section
          className="service-section"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #00E0BD',
            borderRadius: '2rem',
            padding: '2rem',
            maxWidth: '600px',
            textAlign: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: baseTransition,
            transitionDelay: '0.4s',
          }}
        >
          <h2 className="text-lg" style={{ marginBottom: '1rem' }}>Flu vaccination service (Paid service)</h2>
          <p className="text-lg font-bold mb-2">
            Description:
          </p>
          <ul className="text-lg list-none p-0 mb-4">
            <li>Flu vaccination available for those not eligible for the NHS service or preferring private service.</li>
            <li>Convenient and quick service provided by trained pharmacists.</li>
            <li>Protect yourself and your family against seasonal flu.</li>
          </ul>
          <p className="text-lg font-bold mb-2">
            Details:
          </p>
          <ul className="text-lg list-none p-0">
            <li>Available year-round subject to vaccine availability.</li>
            <li>Appointments recommended but walk-ins may be accepted.</li>
            <li>Pricing details available at the pharmacy or on the website.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VaccinationServices;
