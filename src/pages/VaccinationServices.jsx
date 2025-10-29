import React, { useState, useEffect } from 'react';

const VaccinationServices = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const baseTransition = 'opacity 0.6s ease, transform 0.6s ease';

  const getTransitionStyle = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: baseTransition,
    transitionDelay: `${delay}ms`,
  });

  return (
    <div className="service-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1
        className="text-4xl font-normal text-[#5C427D]"
        style={{
          marginBottom: '2rem',
          ...getTransitionStyle(0),
        }}
      >
        Vaccination Services
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-15">
        <section
          className="service-section"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #A996CA',
            borderRadius: '2rem',
            padding: '2rem',
            maxWidth: '400px',
            textAlign: 'center',
            ...getTransitionStyle(200),
          }}
        >
          <h2 className="text-2xl font-normal text-[#5C427D] mb-4">Flu & COVID Vaccination Services</h2>
          <img src={`/images/vaccinations.jpg`} alt="On-site vaccination clinics" className="mx-auto mb-4 w-[55%] rounded-2xl" />
          <p className="text-gray-700 text-base">
            Our pharmacy offers <strong>flu and COVID-19 vaccinations</strong>, administered by qualified pharmacists in a safe and comfortable setting. 
            Whether in-store or as part of our on-site vaccination clinics, we make it easy for patients and residents to stay protected and up to date.
          </p>
        </section>

        <section
          className="service-section"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #A996CA',
            borderRadius: '2rem',
            padding: '2rem',
            maxWidth: '400px',
            textAlign: 'center',
            ...getTransitionStyle(400),
          }}
        >
          <h2 className="text-2xl" style={{ marginBottom: '1rem', fontWeight: 'normal', color: '#5C427D' }}>
            Flu Vaccination Service (NHS Service)
          </h2>
          <img src="/images/vaccine.jpg" alt="Flu vaccination NHS" className="mx-auto mb-4 w-[55%] rounded-2xl" />
          <p className="text-base font-bold mb-2">
            Description:
          </p>
          <ul className="text-base list-none p-0 mb-4">
            <li>Free flu vaccinations for eligible adults, administered by qualified professionals.</li>
          </ul>
          <p className="text-base font-bold mb-2">
            Details:
          </p>
          <ul className="text-base list-none p-0">
            <li>Available September–March. Appointment required. Bring NHS number.</li>
          </ul>
        </section>

        <section
          className="service-section"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #A996CA',
            borderRadius: '2rem',
            padding: '2rem',
            maxWidth: '400px',
            textAlign: 'center',
            ...getTransitionStyle(600),
          }}
        >
          <h2 className="text-2xl" style={{ marginBottom: '1rem', fontWeight: 'normal', color: '#5C427D' }}>Flu Vaccination Service (Paid Service)</h2>
          <img src="/images/vaccine-paid.jpg" alt="Flu vaccination Paid" className="mx-auto mb-4 w-[55%] rounded-2xl" />
          <p className="text-base font-bold mb-2">
            Description:
          </p>
          <ul className="text-base list-none p-0 mb-4">
            <li>Private flu vaccination for those not eligible for NHS, provided by trained pharmacists.</li>
          </ul>
          <p className="text-base font-bold mb-2">
            Details:
          </p>
          <ul className="text-base list-none p-0">
            <li>Available year-round. Appointments recommended. Contact pharmacy for pricing.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VaccinationServices;
