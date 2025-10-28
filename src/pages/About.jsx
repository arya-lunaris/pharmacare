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
        className="text-4xl font-normal text-[#5C427D] mb-15"
        style={getTransitionStyle(200)}
      >
        About Us
      </h1>

      {/* Reliable Deliveries */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(300)}>
        <h2 className="text-2xl font-normal text-[#5C427D] mb-2">Prompt & Free Same-Day Medication Delivery</h2>
        <img src={`/images/delivery.jpg`} alt="Reliable medication delivery" className="w-100 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg">
          Our in-house delivery team ensures every prescription arrives safely and on time — including urgent and same-day acute medications, completely free of charge. 
          We understand the importance of quick, reliable service, so patients and care homes can count on us for prompt delivery every time.
        </p>
      </section>

      {/* Complementary Audits */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(700)}>
        <h2 className="text-2xl font-normal text-[#5C427D] -mb-4">Free Medication Audits for Care Homes</h2>
        <img src={`/images/review.jpg`} alt="Medication management review" className="w-100 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg">
          We offer <strong>free, pharmacist-led medication audits</strong> for nursing and care homes. 
          Our audits assess medication management procedures, identify risks, and ensure CQC compliance. 
          With our support, care homes can maintain safe, effective, and compliant practices while improving overall medication safety.
        </p>
      </section>

      {/* Vaccination Services */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(800)}>
        <h2 className="text-2xl font-normal text-[#5C427D] mb-4">Flu & COVID Vaccination Services</h2>
        <img src={`/images/vaccinations.jpg`} alt="On-site vaccination clinics" className="w-72 h-72 object-contain rounded-3xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg">
          Our pharmacy offers <strong>flu and COVID-19 vaccinations</strong>, administered by qualified pharmacists in a safe and comfortable setting. 
          Whether in-store or as part of our on-site vaccination clinics, we make it easy for patients and residents to stay protected and up to date.
        </p>
      </section>

      {/* Pharmacy First Service */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(900)}>
        <h2 className="text-2xl font-normal text-[#5C427D] mb-8">Pharmacy First Service</h2>
        <img
          src={`/images/pharmacyfirst.jpg`}
          alt="Pharmacy First Service"
          className="w-80 mx-auto rounded-3xl m-5 mb-10"
        />
        <p className="text-gray-700 text-lg">
          Our <strong>Pharmacy First Service</strong> allows patients to access treatment for common conditions directly from our pharmacists — without the need to visit a GP. 
          We can assess, advise, and prescribe medication where appropriate, helping you get fast and effective care right from your local pharmacy.
        </p>
      </section>

      {/* Bespoke Medication Dispensing */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(400)}>
        <h2 className="text-2xl font-normal text-[#5C427D] mb-4">Tailored Dispensing Solutions</h2>
        <img src={`/images/dispensing.jpg`} alt="Tailored medication dispensing" className="w-90 h-72 object-contain rounded-3xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg">
          We provide accurate and dependable dispensing services designed around the individual needs of each resident. 
          From new prescriptions to repeat supplies, every order is handled with precision, care, and confidentiality.
        </p>
      </section>

      {/* Professional Guidance & Support */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(500)}>
        <h2 className="text-2xl font-normal text-[#5C427D] -mb-4">Pharmacist Expertise When You Need It</h2>
        <img src={`/images/pharmacists.jpg`} alt="Professional pharmacist guidance" className="w-100 h-72 object-contain rounded-3xl mb-4 mx-auto rounded-md" />
        <p className="text-gray-700 text-lg">
          Our pharmacists are always available to review medications, offer professional advice, 
          and assist care staff with urgent or out-of-hours queries. 
          We’re here to help maintain safe, effective medicine use at all times.
        </p>
      </section>

      {/* Care Staff Training */}
      <section className="max-w-3xl border-2 border-[#A996CA] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(600)}>
        <h2 className="text-2xl font-normal text-[#5C427D] -mb-2">Specialised Training for Care Teams</h2>
        <img src={`/images/team.jpg`} alt="Care staff training session" className="w-110 h-80 object-contain rounded-3xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg">
          Our pharmacist-led training sessions help care staff gain confidence in medicine administration and handling. 
          Each session is tailored to your setting, ensuring your team meets all current safety and regulatory standards.
        </p>
      </section>
    </div>
  );
}

export default About;
