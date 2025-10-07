function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} Pharmacare. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.google.com/maps/place/THE+CROWN,+WEST+BROMWICH+STREET,+WALSALL,+WS1+4BP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#00E0BD]"
          >
            Address
          </a>
          <a href="mailto:pharmacarepharmacy@outlook.com" className="text-gray-700 hover:text-[#00E0BD]">
            Email
          </a>
          <a href="tel:01922611963" className="text-gray-700 hover:text-[#00E0BD]">
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;