import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, MapPin, Users, Train } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Header />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 md:py-12">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About Kolkata Metro</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Kolkata Metro is India's first underground metro railway system, serving the City of Joy since October 24, 1984. 
                Operated by the Kolkata Metro Rail Corporation (KMRC), it has been a lifeline for millions of commuters.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Starting with just a 3.4 km stretch between Esplanade and Bhowanipur, the network has grown significantly 
                and continues to expand to serve the growing transportation needs of Kolkata and its suburbs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-metro-blue/10 p-3 sm:p-4 rounded-lg text-center">
                <Train className="h-6 w-6 sm:h-8 sm:w-8 text-metro-blue mx-auto mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-metro-blue">4</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Lines</div>
              </div>
              
              <div className="bg-metro-green/10 p-3 sm:p-4 rounded-lg text-center">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-metro-green mx-auto mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-metro-green">48</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Stations</div>
              </div>
              
              <div className="bg-purple-100 p-3 sm:p-4 rounded-lg text-center">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-base sm:text-lg font-bold text-purple-600">40+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years of Service</div>
              </div>
              
              <div className="bg-orange-100 p-3 sm:p-4 rounded-lg text-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-base sm:text-lg font-bold text-orange-600">1M+</div>
                <div className="text-xs sm:text-sm text-gray-600">Daily Passengers</div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6 sm:pt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Future Expansion</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The Kolkata Metro network is set for major expansion with plans to reach 90 km by 2025 and 130 km by 2027. 
              New lines including the Yellow Line (Dum Dum Cantt to Barasat) and Pink Line (Krishna Kali to Mangal Pandey) 
              are under construction to further enhance connectivity across the metropolitan area.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;