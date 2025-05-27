import { Phone, MapPin, Clock, Users, Train } from "lucide-react";

const Header = () => {
  const handleHelplineClick = () => {
    window.open('tel:9007041789', '_self');
  };

  return (
    <div className="relative text-white overflow-hidden bg-[url('/images/bgMetro.jpg')] bg-cover bg-center">      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div> */}
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 md:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="bg-white/20 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-sm">
              <Train className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
            Select Stations to Find Kolkata Metro Route
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-1 sm:mb-2">Kolkata Metro Network</p>
          <p className="text-sm sm:text-base md:text-lg text-blue-200">Operator: Kolkata Metro Rail Corporation (KMRC)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3 text-yellow-300" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Metro Timings</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100">06:45 AM – 10:45 PM</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={handleHelplineClick}>
            <Phone className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3 text-green-300" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Helpline</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 hover:text-white transition-colors">9007041789</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
            <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3 text-orange-300" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Total Stations</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100">48 Active / 51 Inactive</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3 text-purple-300" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Metro Lines</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100">4 Active / 2 Inactive</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex items-center">
              <Train className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-300" />
              Train Specifications
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100">Train Lengths: 4/6/8 Coaches</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex items-center">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-300" />
              Operation History
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100">Operation Start Date: 24 October 1984</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;