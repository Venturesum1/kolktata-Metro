import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download, ZoomIn, ZoomOut } from "lucide-react";

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Header />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 md:py-12">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Kolkata Metro Network Map</h2>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center px-3 sm:px-4 py-2 bg-metro-blue text-white rounded-lg hover:bg-metro-blue/90 transition-colors text-sm sm:text-base">
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Download Map
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 text-center min-h-64 sm:min-h-96 lg:min-h-[500px] flex items-center justify-center">
            <div>
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-metro-blue to-metro-green rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">M</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Interactive Metro Map</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-md mx-auto">
                Explore the complete Kolkata Metro network with all lines and stations
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-metro-blue rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm">Blue Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-metro-green rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm">Green Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm">Purple Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm">Orange Line</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Map visualization will be integrated here with interactive station selection
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Map;