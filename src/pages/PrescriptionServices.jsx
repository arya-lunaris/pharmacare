import React, { useState, useEffect } from 'react';

const servicesData = [
  {
    title: 'Prompt & Free Same-Day Medication Delivery',
    description:
      'Our in-house delivery team ensures every prescription arrives safely and on time — including urgent and same-day acute medications, completely free of charge. We understand the importance of quick, reliable service, so patients and care homes can count on us for prompt delivery every time.',
    image: '/images/delivery.jpg',
    details: null,
  },
  {
    title: 'Free Medication Audits for Care Homes',
    description:
      'We offer free, pharmacist-led medication audits for nursing and care homes. Our audits assess medication management procedures, identify risks, and ensure CQC compliance. With our support, care homes can maintain safe, effective, and compliant practices while improving overall medication safety.',
    image: '/images/review.jpg',
    details: null,
  },
  {
    title: 'Tailored Dispensing Solutions',
    description:
      'We provide accurate and dependable dispensing services designed around the individual needs of each resident. From new prescriptions to repeat supplies, every order is handled with precision, care, and confidentiality.',
    image: '/images/dispensing.jpg',
    details: null,
  },  
  {
    title: 'Pharmacy First Service',
    description:
      'Our Pharmacy First Service allows patients to access treatment for common conditions directly from our pharmacists — without the need to visit a GP. We can assess, advise, and prescribe medication where appropriate, helping you get fast and effective care right from your local pharmacy.',
    image: '/images/pharmacyfirst.jpg',
    details: null,
  },
  {
    title: 'Medical Supplies (Appliances)',
    description:
      'We provide a wide range of medical supplies and appliances to support your health and wellbeing.',
    image: '/images/medical-supplies.jpg',
    details: [
      'Wheelchairs and mobility aids',
      'Orthopedic supports and braces',
      'Respiratory equipment',
      'Home care supplies',
    ],
  },
  {
    title: 'Stoma Bag Support Service',
    description:
      'Specialized support for patients using stoma bags, including supplies and expert advice.',
    image: '/images/stoma.jpg',
    details: [
      'Quality stoma bags and accessories',
      'Fitting and replacement guidance',
      'Skin care advice',
      'Emotional and practical support',
    ],
  },
];

function getTransitionStyle(delay, loaded) {
  return {
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  };
}

export default function PrescriptionServices() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}
    >
      <h1
        className="text-4xl font-normal text-[#5C427D] mb-15"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '3rem',
        }}
      >
        Prescription Services
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8"
      >
        {servicesData.map((service, index) => (
          <section
            key={service.title}
            style={{
              ...getTransitionStyle(200 + index * 200, loaded),
              backgroundColor: 'white',
              color: 'black',
              border: '2px solid #A996CA',
              borderRadius: '2rem',
              padding: '1.5rem 2rem',
              width: '100%',
              maxWidth: 360,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            <h2
              className="text-2xl font-normal text-[#5C427D]"
              style={{
                marginBottom:
                  service.title === 'Pharmacy First Service'
                    ? '2rem'
                    : service.details
                    ? '1rem'
                    : '1.25rem',
              }}
            >
              {service.title}
            </h2>
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className={`rounded-3xl object-contain ${
                  service.title === 'Pharmacy First Service' ? 'mb-10' : 'mb-4'
                }`}
                style={{
                  width: service.title === 'Pharmacy First Service' ? '80%' : '100%',
                  maxHeight: service.title === 'Pharmacy First Service' ? 160 : 192,
                  objectFit: 'contain',
                  borderRadius: '1rem',
                }}
              />
            )}
            <p
              className="text-gray-700 text-base"
              style={{ marginBottom: service.details ? '1rem' : 0, flexGrow: 1 }}
            >
              {service.description}
            </p>
            {service.details && (
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '1.25rem',
                  textAlign: 'left',
                  width: '100%',
                  maxWidth: 320,
                  margin: '0 auto 0',
                }}
              >
                {service.details.map((detail) => (
                  <li key={detail} style={{ marginBottom: '0.4rem' }}>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
