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

  const teams = [
    {
      title: 'Reception Team',
      image: '/images/reception.jpg',
      description: 'Our friendly reception team is the first point of contact for all patients. They manage appointments, answer queries, and provide essential guidance on pharmacy services. Always approachable and professional, they ensure a smooth and welcoming experience for everyone visiting the pharmacy.',
    },
    {
      title: 'Dispensing Team',
      image: '/images/dispensing-team.jpg',
      description: 'Our skilled dispensing team prepares and checks prescriptions with utmost care. They ensure the correct medications are supplied, provide advice on usage, and work closely with pharmacists to maintain patient safety and accuracy. Their precision and attention to detail make sure your medicines are managed effectively.',
    },
    {
      title: 'Management Team',
      image: '/images/management-team.jpg',
      description: 'Our management team oversees all pharmacy operations to ensure efficient, safe, and compliant services. They coordinate between departments, manage staff training, and implement policies that enhance patient care and community health. Their leadership ensures the pharmacy runs smoothly and upholds the highest professional standards.',
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center text-center space-y-16">
      <h1
        className="text-4xl font-normal text-[#5C427D] -mb-0"
        style={getTransitionStyle(200)}
      >
        About Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-7xl mx-auto" style={getTransitionStyle(300)}>
        {teams.map((team, index) => (
          <section
            key={index}
            className="border-2 border-[#A996CA] rounded-3xl p-4 bg-white shadow-sm flex flex-col items-center text-center space-y-3"
            style={getTransitionStyle(400 + index * 200)}
          >
            <h2 className="text-2xl font-normal text-[#5C427D] -mb-4">{team.title}</h2>
            <img
              src={team.image}
              alt={team.title}
              className="w-72 h-64 object-contain rounded-3xl -mb-2"
            />
            <p className="text-gray-700 text-base">{team.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default About;
