import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Medical Supplies (Appliances)',
    description: 'We provide a wide range of medical supplies and appliances to support your health and wellbeing.',
    details: [
      'Wheelchairs and mobility aids',
      'Orthopedic supports and braces',
      'Respiratory equipment',
      'Home care supplies',
    ],
  },
  {
    title: 'New Medicine Service',
    description: 'Our new medicine service ensures you receive the correct guidance and support when starting new medications.',
    details: [
      'Medication counseling',
      'Side effect monitoring',
      'Personalized dosage instructions',
      'Follow-up consultations',
    ],
  },
  {
    title: 'Prescription Delivery Service',
    description: 'Convenient and reliable delivery of your prescriptions directly to your doorstep.',
    details: [
      'Fast and secure delivery',
      'Flexible delivery scheduling',
      'Real-time tracking',
      'Contactless delivery options',
    ],
  },
  {
    title: 'Stoma Bag Support Service',
    description: 'Specialized support for patients using stoma bags, including supplies and expert advice.',
    details: [
      'Quality stoma bags and accessories',
      'Fitting and replacement guidance',
      'Skin care advice',
      'Emotional and practical support',
    ],
  },
];

export default function PrescriptionServices() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-15" style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>Prescription Services</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
          textAlign: 'center',
        }}
      >
        {services.map((service, index) => (
          <section
            key={service.title}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '2px solid #00E0BD',
              borderRadius: '2rem',
              padding: '1.5rem 2rem',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${0.2 + index * 0.2}s, transform 0.6s ease ${0.2 + index * 0.2}s`,
              textAlign: 'center',
            }}
          >
            <h2 className="text-2xl font-semibold text-black">{service.title}</h2>
            {service.title === 'Medical Supplies (Appliances)' && (
              <img src="/images/medical-supplies.jpg" alt="Medical Supplies" className="mx-auto -mb-4 rounded-2xl" style={{ width: '100%', maxWidth: '100%' }} />
            )}
            {service.title === 'New Medicine Service' && (
              <img src="/images/medical-service.jpg" alt="New Medicine Service" className="mx-auto rounded-2xl" style={{ width: '100%', maxWidth: '100%' }} />
            )}
            {service.title === 'Prescription Delivery Service' && (
              <img src="/images/prescriptions.jpg" alt="Prescription Delivery Service" className="mx-auto rounded-2xl" style={{ width: '100%', maxWidth: '100%' }} />
            )}
            {service.title === 'Stoma Bag Support Service' && (
              <img src="/images/stoma.jpg" alt="Stoma Bag Support Service" className="mx-auto -mb-10 rounded-2xl" style={{ width: '100%', maxWidth: '100%' }} />
            )}
            <p className="text-lg" style={{ margin: '0.75rem 0 1.5rem' }}>{service.description}</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', textAlign: 'left', maxWidth: 600, margin: '0 auto', display: 'inline-block' }}>
              {service.details.map((detail) => (
                <li key={detail} style={{ marginBottom: '0.4rem' }}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
