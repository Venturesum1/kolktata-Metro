
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kolkata Metro</h3>
            <p className="text-gray-400">India's first underground metro railway system, serving the City of Joy since 1984.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Route Planner</li>
              <li>Station Facilities</li>
              <li>Smart Card</li>
              <li>Lost & Found</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Accessibility</li>
              <li>Security Guidelines</li>
              <li>Careers</li>
              <li>Tenders</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Helpline: 9800425510</li>
              <li>Emergency: 100</li>
              <li>Customer Care</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kolkata Metro Rail Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
