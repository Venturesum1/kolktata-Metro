import { Phone, MapPin, Clock, Users, Train } from "lucide-react";

const Header = () => {
  const handleHelplineClick = () => {
    window.open('tel:9800425510', '_self');
  };

  return (
    <div className="relative bg-gradient-to-r from-metro-blue via-metro-green to-metro-purple text-white overflow-hidden bg-[url('/images/bgMetro.jpg')] bg-cover bg-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Train className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Select Stations to Find Kolkata Metro Route
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">Kolkata Metro Network</p>
          <p className="text-lg text-blue-200">Operator: Kolkata Metro Rail Corporation (KMRC)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-semibold text-lg mb-2">Metro Timings</h3>
            <p className="text-blue-100">06:45 AM – 10:45 PM</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={handleHelplineClick}>
            <Phone className="h-8 w-8 mx-auto mb-3 text-green-300" />
            <h3 className="font-semibold text-lg mb-2">Helpline</h3>
            <p className="text-blue-100 hover:text-white transition-colors">9800425510</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-orange-300" />
            <h3 className="font-semibold text-lg mb-2">Total Stations</h3>
            <p className="text-blue-100">48 Active / 51 Inactive</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="h-8 w-8 mx-auto mb-3 text-purple-300" />
            <h3 className="font-semibold text-lg mb-2">Metro Lines</h3>
            <p className="text-blue-100">4 Active / 2 Inactive</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Train className="h-5 w-5 mr-2 text-yellow-300" />
              Train Specifications
            </h3>
            <p className="text-blue-100">Train Lengths: 4/6/8 Coaches</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-300" />
              Operation History
            </h3>
            <p className="text-blue-100">Operation Start Date: 24 October 1984</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
