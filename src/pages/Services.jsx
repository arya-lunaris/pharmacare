import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const sections = [
    {
      title: "Prescription services",
      link: "/prescription",
      image: "/images/prescription.jpg",
    },
    {
      title: "Screening and test services",
      link: "/screening",
      image: "/images/screening.jpg",
    },
    {
      title: "Vaccination services",
      link: "/vaccination",
      image: "/images/vaccination.jpg",
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center space-y-6">
      <h1
        className={`text-3xl font-bold text-gray-800 transition-all duration-500 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-6 w-full max-w-5xl">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`bg-[#00E0BD] text-white rounded-3xl p-8 flex flex-col justify-between items-center w-80 transition-all duration-500 transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <h2 className="text-xl font-semibold mb-6 text-center">{section.title}</h2>
            <img
              src={section.image}
              alt={section.title}
              className="w-full rounded-2xl mb-6"
            />
            <button
              onClick={() => navigate(section.link)}
              className="bg-[#00E0BD] text-white border border-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-[#00E0BD] hover:border-[#00E0BD] transition-colors cursor-pointer"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;