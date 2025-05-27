
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download, ZoomIn, ZoomOut } from "lucide-react";

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Kolkata Metro Network Map</h2>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 bg-metro-blue text-white rounded-lg hover:bg-metro-blue/90 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Map
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ZoomIn className="h-4 w-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ZoomOut className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[500px] flex items-center justify-center">
            <div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-metro-blue to-metro-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Metro Map</h3>
              <p className="text-gray-600 mb-4">
                Explore the complete Kolkata Metro network with all lines and stations
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-metro-blue rounded mr-2"></div>
                  <span className="text-sm">Blue Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-metro-green rounded mr-2"></div>
                  <span className="text-sm">Green Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-600 rounded mr-2"></div>
                  <span className="text-sm">Purple Line</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                  <span className="text-sm">Orange Line</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
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
