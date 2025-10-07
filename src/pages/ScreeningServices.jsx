import React, { useState, useEffect } from 'react';

const ScreeningServices = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1
        className="text-3xl font-bold text-gray-800 mb-15"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          transitionDelay: '0.1s',
        }}
      >
        Screening Services
      </h1>
      <div
        style={{
          backgroundColor: '#00E0BD',
          color: '#fff',
          borderRadius: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          transitionDelay: '0.3s',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Type 2 Diabetes Screening
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Early detection of type 2 diabetes is crucial for effective management and prevention of complications. Our screening service helps identify individuals at risk through comprehensive assessments.
        </p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Risk Assessment:</strong> Evaluation of personal and family history, lifestyle factors, and symptoms.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Blood Glucose Testing:</strong> Fasting blood sugar and HbA1c tests to measure glucose levels.
          </li>
          <li>
            <strong>Follow-up Recommendations:</strong> Guidance on lifestyle changes, monitoring, and referrals if necessary.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScreeningServices;
