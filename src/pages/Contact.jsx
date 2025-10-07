import { useEffect, useState } from "react";

function Contact() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const baseDelay = 0;
  const delays = [baseDelay, baseDelay + 100, baseDelay + 200, baseDelay + 300, baseDelay + 400];

  return (
    <div className="p-8 flex flex-col items-center">
      <h1
        className={`text-3xl font-bold text-gray-800 transition-all duration-700 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[0]}ms` }}
      >
        Contact Us
      </h1>
      <p
        className={`mt-4 text-gray-600 transition-all duration-700 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[1]}ms` }}
      >
        We’d love to hear from you! You can reach Pharmacare at:
      </p>
      <ul className="mt-4 text-gray-700 space-y-2 flex flex-col items-center">
        <li
          className={`transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[2]}ms` }}
        >
          <strong>Phone:</strong> (123) 456-7890
        </li>
        <li
          className={`transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[3]}ms` }}
        >
          <strong>Email:</strong> info@pharmacare.com
        </li>
        <li
          className={`transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[4]}ms` }}
        >
          <strong>Address:</strong> 123 Health Street, Wellness City
        </li>
      </ul>
    </div>
  );
}

export default Contact;
