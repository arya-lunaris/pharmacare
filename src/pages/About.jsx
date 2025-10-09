import React, { useState, useEffect } from 'react';

function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const getTransitionStyle = (delay) => ({
    transition: 'opacity 0.7s ease, transform 0.7s ease',
    transitionDelay: `${delay}ms`,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <div className="p-8 flex flex-col items-center text-center space-y-16">
      <h1
        className="text-4xl font-bold text-[#5C427D] mb-15"
        style={getTransitionStyle(200)}
      >
        About Pharmacare
      </h1>

      {/* Reliable Deliveries */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(300)}>
        <img src={`/images/delivery.jpg`} alt="Reliable medication delivery" className="w-100 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">Prompt Medication Delivery</h2>
        <p className="text-gray-700 text-lg">
          Our in-house delivery team ensures every prescription arrives safely and on time — including urgent and same-day requests. 
          With reliable logistics and care, your residents never go without essential medication.
        </p>
      </section>

      {/* Bespoke Medication Dispensing */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(400)}>
        <img src={`/images/dispensing.jpg`} alt="Tailored medication dispensing" className="w-90 h-72 object-contain rounded-3xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">Tailored Dispensing Solutions</h2>
        <p className="text-gray-700 text-lg">
          We provide accurate and dependable dispensing services designed around the individual needs of each resident. 
          From new prescriptions to repeat supplies, every order is handled with precision, care, and confidentiality.
        </p>
      </section>

      {/* Professional Guidance & Support */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(500)}>
        <img src={`/images/pharmacists.jpg`} alt="Professional pharmacist guidance" className="w-100 h-72 object-contain rounded-3xl mb-4 mx-auto rounded-md" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">Pharmacist Expertise When You Need It</h2>
        <p className="text-gray-700 text-lg">
          Our pharmacists are always available to review medications, offer professional advice, 
          and assist care staff with urgent or out-of-hours queries. 
          We’re here to help maintain safe, effective medicine use at all times.
        </p>
      </section>

      {/* Care Staff Training */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(600)}>
        <img src={`/images/team.jpg`} alt="Care staff training session" className="w-110 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">Specialised Training for Care Teams</h2>
        <p className="text-gray-700 text-lg">
          Our pharmacist-led training sessions help care staff gain confidence in medicine administration and handling. 
          Each session is tailored to your setting, ensuring your team meets all current safety and regulatory standards.
        </p>
      </section>

      {/* Complementary Audits */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(700)}>
        <img src={`/images/review.jpg`} alt="Medication management review" className="w-100 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">Medication Management Reviews</h2>
        <p className="text-gray-700 text-lg">
          Our pharmacist-led audits assess medication management procedures, identify risks, and ensure CQC compliance. 
          With our guidance, your care home can maintain safe, efficient, and compliant practices.
        </p>
      </section>

      {/* Vaccination Services */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(800)}>
        <img src={`/images/vaccinations.jpg`} alt="On-site vaccination clinics" className="w-72 h-72 object-contain rounded-3xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-[#5C427D] mb-4">On-Site Vaccination Clinics</h2>
        <p className="text-gray-700 text-lg">
          We provide convenient, pharmacist-administered vaccination services directly at your care home. 
          Residents can receive vaccinations in a safe, comfortable environment without the need for travel.
        </p>
      </section>
    </div>
  );
}

export default About;
