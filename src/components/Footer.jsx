function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
        <p className="text-gray-700 text-sm">&copy; 2025 Pharmacare. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <img src="/images/registered.png" alt="Registered Pharmacy" className="h-6 object-contain" />
          <img src="/images/npa.png" alt="NPA Member" className="h-6 object-contain" />
          <img src="/images/nhs.png" alt="NHS Partner" className="h-6 object-contain" />
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.google.com/maps/place/THE+CROWN,+WEST+BROMWICH+STREET,+WALSALL,+WS1+4BP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#A996CA]"
          >
            Address
          </a>
          <a href="mailto:pharmacarepharmacy@outlook.com" className="text-gray-700 hover:text-[#A996CA]">
            Email
          </a>
          <a href="tel:01922611963" className="text-gray-700 hover:text-[#A996CA]">
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;