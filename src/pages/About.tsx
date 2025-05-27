
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, MapPin, Users, Train } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kolkata Metro</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kolkata Metro is India's first underground metro railway system, serving the City of Joy since October 24, 1984. 
                Operated by the Kolkata Metro Rail Corporation (KMRC), it has been a lifeline for millions of commuters.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Starting with just a 3.4 km stretch between Esplanade and Bhowanipur, the network has grown significantly 
                and continues to expand to serve the growing transportation needs of Kolkata and its suburbs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-metro-blue/10 p-4 rounded-lg text-center">
                <Train className="h-8 w-8 text-metro-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-metro-blue">4</div>
                <div className="text-sm text-gray-600">Active Lines</div>
              </div>
              
              <div className="bg-metro-green/10 p-4 rounded-lg text-center">
                <MapPin className="h-8 w-8 text-metro-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-metro-green">48</div>
                <div className="text-sm text-gray-600">Active Stations</div>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-purple-600">40+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-orange-600">1M+</div>
                <div className="text-sm text-gray-600">Daily Passengers</div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Future Expansion</h3>
            <p className="text-gray-700 leading-relaxed">
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
