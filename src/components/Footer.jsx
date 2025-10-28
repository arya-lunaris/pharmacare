function Footer() {
  return (
    <footer className="bg-[#E3DFEC] mt-30 py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:gap-x-50">
        <div className="flex-1 flex flex-col items-center space-y-2">
          {/* Members of */}
          <h2 className="text-xl font-normal text-[#5C427D] -mb-1.5">Members of:</h2>
          <div className="flex flex-col items-center -space-y-6">
            <img src="/images/gphc.png" alt="GPHC" className="h-28 w-28 object-contain" />
            <img src="/images/nhs.png" alt="NHS" className="h-16 w-16 object-contain" />
            <img src="/images/npa.png" alt="NPA" className="h-28 w-28 object-contain" />
            <img src="/images/registered.png" alt="Registered" className="h-17 w-17 object-contain" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-2">
          {/* In partnership */}
          <h2 className="text-xl font-normal text-[#5C427D] -mb-5">In partnership with:</h2>
          <div className="flex flex-col items-center -space-y-10">
            <img src="/images/camascope.jpg" alt="Camascope" className="h-32 w-32 object-contain" />
            <img src="/images/caremeds.jpg" alt="Caremeds" className="h-24 w-24 object-contain -mb-7" />
            <img src="/images/atlas.png" alt="Atlas" className="h-28 w-28 object-contain" />
            <img src="/images/access.png" alt="Access" className="h-30 w-30 object-contain -mt-5" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-4">
          {/* Contact Information */}
          <h2 className="text-xl font-normal text-[#5C427D] mb-7">Contact information:</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/address.png" alt="Address icon" className="h-6 w-6" />
              <a href="https://www.google.com/maps/place/THE+CROWN,+WEST+BROMWICH+STREET,+WALSALL,+WS1+4BP" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm hover:text-[#5C427D] transition-colors duration-300">
                Address
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/email.png" alt="Email icon" className="h-6 w-6" />
              <a href="mailto:pharmacarepharmacy@outlook.com" className="text-gray-700 text-sm hover:text-[#5C427D] transition-colors duration-300">
                Email
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <img src="/images/phone.png" alt="Phone icon" className="h-6 w-6" />
              <a href="tel:01922611963" className="text-gray-700 text-sm hover:text-[#5C427D] transition-colors duration-300">
                Phone
              </a>
            </div>
          </div>
          <div className="mt-10 text-center text-[14px]">
            <p className="text-gray-700">&copy; 2025 PharmaCare. All rights reserved.</p>
            <p className="text-gray-700">GPhC Premises Reg No: 9011289</p>
            <p className="text-gray-700">Superintendent Pharmacist: Balbir Ram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;