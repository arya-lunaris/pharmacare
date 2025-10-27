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
        className={`mt-5 text-4xl font-bold text-[#5C427D] transition-all duration-700 ease-out
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

      <div
        className={`rounded-3xl border border-[#A996CA] p-8 mb-10 mt-4 transition-all duration-700 ease-out max-w-2xl w-full
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[2]}ms` }}
      >
        <ul className="text-gray-700 space-y-6 flex flex-col items-center">
          <li
            className={`transition-all duration-700 ease-out flex items-center space-x-2 text-lg
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${delays[3]}ms` }}
          >
            <img src="/images/address.png" alt="Address icon" className="w-10 h-10" />
            <span>The Crown, West Bromwich Street, Walsall, WS1 4BP</span>
          </li>
          <li
            className={`transition-all duration-700 ease-out flex items-center space-x-2 text-lg
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${delays[4]}ms` }}
          >
            <img src="/images/email.png" alt="Email icon" className="w-10 h-10 mr-3" />
            <a href="mailto:info@pharmacare.com" className="text-blue-600 underline">pharmacarepharmacy@outlook.com</a>
          </li>
          <li
            className={`transition-all duration-700 ease-out flex items-center space-x-2 text-lg
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${delays[5]}ms` }}
          >
            <img src="/images/phone.png" alt="Phone icon" className="w-10 h-10" />
            <span>01922 611963</span>
          </li>
        </ul>
      </div>
      <div
        className={`mb-6 mt-6 transition-all duration-700 ease-out w-full max-w-2xl mx-auto
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[6]}ms` }}
      >
        <table className="border-collapse rounded-3xl bg-[#A996CA] text-white w-full text-xl">
          <thead>
            <tr>
              <th className="px-6 py-5 text-center rounded-3xl font-semibold text-xl">Day</th>
              <th className="px-6 py-5 text-center rounded-3xl font-semibold text-xl">Opening Times</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">Monday - Friday</td>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">9:00 AM - 6:30 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">Saturday</td>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">9:00 AM - 5:30 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">Sunday</td>
              <td className="px-6 py-5 text-center rounded-3xl text-xl">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className={`rounded-3xl border border-[#A996CA] p-8 mb-10 mt-10 transition-all duration-700 ease-out max-w-2xl w-full
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delays[7]}ms` }}
      >
        <h2 className="text-2xl font-bold text-[#5C427D] mb-4 text-center">Contact Our Team</h2>
        <p className="mb-6 text-gray-700 text-center">
          Fill out this form and our specialist team will contact you as soon as possible.
        </p>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-semibold">Full Name *</label>
            <input type="text" placeholder="Your full name" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A996CA]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-semibold">Email Address *</label>
            <input type="email" placeholder="your@email.com" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A996CA]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-semibold">Phone Number *</label>
            <input type="tel" placeholder="020 1234 5678" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A996CA]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-semibold">Organisation Name</label>
            <input type="text" placeholder="Your organisation name" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A996CA]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-semibold">Message *</label>
            <textarea placeholder="Tell us about your pharmacy needs..." className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A996CA]" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-[#A996CA] text-white font-medium px-6 py-3 rounded-full hover:bg-[#5C427D] transition-colors mt-2">
            Send Message
          </button>
          <p className="text-gray-500 text-sm mt-2">* Required fields. We'll never share your information with third parties.</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
