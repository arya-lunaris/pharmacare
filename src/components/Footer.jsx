function Footer() {
  return (
    <footer className="bg-[#E3DFEC] mt-30 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
        {/* Members of */}
        <div className="flex flex-col items-center md:items-center space-y-2">
          <h2 className="text-2xl font-bold text-[#5C427D] -mb-0">Members of:</h2>
          <div className="flex flex-col items-center -space-y-4">
            <img src="/images/gphc.png" alt="GPHC" className="h-35 w-35 object-contain -mb-10" />
            <img src="/images/nhs.png" alt="NHS" className="h-20 w-20 object-contain -mb-8" />
            <img src="/images/npa.png" alt="NPA" className="h-35 w-35 object-contain -mb-8" />
            <img src="/images/registered.png" alt="Registered" className="h-20 w-20 object-contain mb-2" />
          </div>
        </div>

        {/* In partnership */}
        <div className="flex flex-col items-center md:items-center space-y-2">
          <h2 className="text-2xl font-bold text-[#5C427D] -mb-5">In partnership with:</h2>
          <div className="flex flex-col items-center -space-y-4">
            <img src="/images/camascope.jpg" alt="Camascope" className="h-40 w-40 object-contain -mb-15" />
            <img src="/images/caremeds.jpg" alt="Caremeds" className="h-30 w-30 object-contain -mb-10" />
            <img src="/images/atlas.png" alt="Atlas" className="h-35 w-35 object-contain -mb-20" />
            <img src="/images/access.png" alt="Access" className="h-40 w-40 object-contain" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-center space-y-4">
          <h2 className="text-2xl font-bold text-[#5C427D] mb-7">Contact Information:</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/address.png" alt="Address icon" className="h-6 w-6" />
              <a href="https://www.google.com/maps/place/THE+CROWN,+WEST+BROMWICH+STREET,+WALSALL,+WS1+4BP" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg hover:text-[#5C427D] transition-colors duration-300">
                Address
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/email.png" alt="Email icon" className="h-6 w-6" />
              <a href="mailto:pharmacarepharmacy@outlook.com" className="text-gray-700 text-lg hover:text-[#5C427D] transition-colors duration-300">
                Email
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/phone.png" alt="Phone icon" className="h-6 w-6" />
              <a href="tel:01922611963" className="text-gray-700 text-lg hover:text-[#5C427D] transition-colors duration-300">
                Phone
              </a>
            </div>
          </div>
          <div className="mt-15 text-center">
            <p className="text-gray-700 text-lg">&copy; 2025 Pharmacare. All rights reserved.</p>
            <p className="text-gray-700 text-lg">GPhC Premises Reg No: 9011289</p>
            <p className="text-gray-700 text-lg">Superintendent Pharmacist: Balbir Ram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;