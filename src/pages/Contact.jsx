import { useEffect, useState } from "react";

function Contact() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const baseDelay = 0;
  const delays = [
    baseDelay,
    baseDelay + 100,
    baseDelay + 200,
    baseDelay + 300,
    baseDelay + 400,
    baseDelay + 500,
    baseDelay + 600,
    baseDelay + 700,
  ];

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
        className={`mb-8 mt-4 text-gray-600 transition-all duration-700 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[1]}ms` }}
      >
        We’d love to hear from you! You can reach Pharmacare at:
      </p>
      <ul className="mb-8 mt-4 text-gray-700 space-y-6 flex flex-col items-center">
        <li
          className={`transition-all duration-700 ease-out flex items-center space-x-2
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[2]}ms` }}
        >
          <img src="/images/address.png" alt="Address icon" className="w-10 h-10" />
          <span>THE CROWN, WEST BROMWICH STREET, WALSALL, WS1 4BP</span>
        </li>
        <li
          className={`transition-all duration-700 ease-out flex items-center space-x-2
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[3]}ms` }}
        >
          <img src="/images/email.png" alt="Email icon" className="w-10 h-10" />
          <a href="mailto:info@pharmacare.com" className="text-blue-600 underline">pharmacarepharmacy@outlook.com</a>
        </li>
        <li
          className={`transition-all duration-700 ease-out flex items-center space-x-2
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: `${delays[4]}ms` }}
        >
          <img src="/images/phone.png" alt="Phone icon" className="w-10 h-10" />
          <span>01922 611963</span>
        </li>
      </ul>
      <div
        className={`mb-6 mt-6 transition-all duration-700 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[5]}ms` }}
      >
        <table className="border-collapse rounded-lg bg-[#00E0BD] text-white mx-auto w-full max-w-md text-lg">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left rounded font-semibold text-xl">Day</th>
              <th className="px-6 py-4 text-left rounded font-semibold text-xl">Opening Times</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 rounded">Monday - Friday</td>
              <td className="px-6 py-4 rounded">9:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 rounded">Saturday</td>
              <td className="px-6 py-4 rounded">9:00 AM - 1:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 rounded">Sunday</td>
              <td className="px-6 py-4 rounded">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
