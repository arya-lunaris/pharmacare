

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Pharmacare</h1>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Your trusted local pharmacy for prescriptions, health advice, and wellness services. 
        At Pharmacare, we’re committed to providing personalized care for you and your family.
      </p>
      <button className="mt-6 px-6 py-3 bg-[#00E0BD] text-white font-medium rounded hover:bg-teal-400 transition-colors">
        Learn More
      </button>
    </div>
  );
}

export default Home;