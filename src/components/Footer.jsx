

function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} Pharmacare. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="tel:1234567890" className="text-gray-700 hover:text-[#00E0BD]">
            Phone
          </a>
          <a href="mailto:info@pharmacare.com" className="text-gray-700 hover:text-[#00E0BD]">
            Email
          </a>
          <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#00E0BD]">
            Location
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;