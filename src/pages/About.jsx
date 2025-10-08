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
        className="text-4xl font-bold text-gray-800 mb-10"
        style={getTransitionStyle(200)}
      >
        About Pharmacare
      </h1>

      {/* Introduction / Overview */}
      <section className="max-w-3xl border border-[#00E0BD] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(300)}>
        <h2 className="text-2xl font-semibold text-[#00E0BD] mb-4">Who We Are</h2>
        <img src="/images/who.jpg" alt="Who We Are" className="mx-auto mb-6 w-3/4 rounded-2xl" />
        <p className="text-gray-700 text-lg">
          Pharmacare is your trusted local pharmacy, proudly serving the community with care and professionalism.
          Whether you need prescriptions, health advice, or everyday wellness products, our team is always here to help.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="max-w-3xl border border-[#00E0BD] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(400)}>
        <h2 className="text-2xl font-semibold text-[#00E0BD] mb-4">Our Mission & Values</h2>
        <img src="/images/mission.jpg" alt="Mission and Values" className="mx-auto mb-6 w-3/4 rounded-2xl" />
        <p className="text-gray-700 text-lg">
          Our mission is simple — to deliver quality healthcare that’s personal, accessible, and compassionate.
          We believe in integrity, respect, and community care. Every customer who walks through our doors
          deserves to feel valued and supported.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="max-w-3xl border border-[#00E0BD] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(500)}>
        <h2 className="text-2xl font-semibold text-[#00E0BD] mb-4">Meet the Team</h2>
        <img src="/images/team.jpg" alt="Our Team" className="mx-auto mb-6 w-3/4 rounded-2xl" />
        <p className="text-gray-700 text-lg mb-4">
          Our friendly pharmacists and staff have years of experience in healthcare and patient support.
          From expert advice to quick prescriptions, we’re committed to ensuring your well-being.
        </p>
      </section>

      {/* Community Commitment */}
      <section className="max-w-3xl border border-[#00E0BD] rounded-3xl p-6 bg-white shadow-sm" style={getTransitionStyle(600)}>
        <h2 className="text-2xl font-semibold text-[#00E0BD] mb-4">Our Community</h2>
        <img src="/images/community.jpg" alt="Our Community" className="mx-auto mb-6 w-3/4 rounded-2xl" />
        <p className="text-gray-700 text-lg">
          We’re more than just a pharmacy — we’re part of the community. 
          Pharmacare supports local initiatives, health awareness events, and charity programs 
          to make a positive difference in people’s lives.
        </p>
      </section>
    </div>
  );
}

export default About;
