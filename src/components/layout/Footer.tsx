const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Kolkata Metro</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">India's first underground metro railway system, serving the City of Joy since 1984.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Route Planner</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Station Facilities</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Smart Card</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Lost & Found</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Information</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Accessibility</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Security Guidelines</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Tenders</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Helpline: 9007041789</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Emergency: 100</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Customer Care</li>
              <li className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2024 Kolkata Metro Rail Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;