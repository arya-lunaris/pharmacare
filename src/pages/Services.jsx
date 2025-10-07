import { useState, useEffect } from "react";

function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const services = [
    "Prescription Refills",
    "NHS and Private Vaccinations",
    "Health Consultations",
    "Prescription Delivery",
    "Over-the-Counter Medicines",
  ];

  return (
    <div className="p-8 flex flex-col items-center">
      <h1
        className={`text-3xl font-bold text-gray-800 transition-all duration-500 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Our Services
      </h1>
      <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside flex flex-col items-center p-0 m-0">
        {services.map((service, index) => (
          <li
            key={service}
            className={`transition-all duration-500 transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;