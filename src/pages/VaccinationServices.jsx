import React, { useState, useEffect } from 'react';

const VaccinationServices = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="service-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 className={`text-3xl font-bold text-gray-800 ${loaded ? 'rise-and-fade' : ''}`} style={{ marginBottom: '2rem' }}>
        Vaccination Services
      </h1>

      <section
        className={`service-section ${loaded ? 'rise-and-fade' : ''}`}
        style={{
          backgroundColor: '#00E0BD',
          color: 'white',
          borderRadius: '2rem',
          padding: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>
          Flu vaccination service: adults aged 18 years or over (NHS service)
        </h2>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Description:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1rem' }}>
          <li>Free flu vaccinations for adults aged 18 years or over who are eligible under NHS guidelines.</li>
          <li>Administered by qualified healthcare professionals.</li>
          <li>Helps protect against seasonal influenza and related complications.</li>
        </ul>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Details:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Available during flu season, typically from September to March.</li>
          <li>Appointment required; please contact the pharmacy to book.</li>
          <li>Bring your NHS number and any relevant medical information.</li>
        </ul>
      </section>

      <section
        className={`service-section ${loaded ? 'rise-and-fade' : ''}`}
        style={{
          backgroundColor: '#00E0BD',
          color: 'white',
          borderRadius: '2rem',
          padding: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Flu vaccination service (Paid service)</h2>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Description:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1rem' }}>
          <li>Flu vaccination available for those not eligible for the NHS service or preferring private service.</li>
          <li>Convenient and quick service provided by trained pharmacists.</li>
          <li>Protect yourself and your family against seasonal flu.</li>
        </ul>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Details:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Available year-round subject to vaccine availability.</li>
          <li>Appointments recommended but walk-ins may be accepted.</li>
          <li>Pricing details available at the pharmacy or on the website.</li>
        </ul>
      </section>
    </div>
  );
};

export default VaccinationServices;
