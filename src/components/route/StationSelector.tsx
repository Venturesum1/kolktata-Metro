
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, MapPin, Clock, CreditCard, Route } from "lucide-react";
import { stations } from "@/utils/routeFinder";
import RouteResult from "./RouteResult";

const StationSelector = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [showRoute, setShowRoute] = useState(false);

  const handleFindRoute = () => {
    if (fromStation && toStation && fromStation !== toStation) {
      setShowRoute(true);
    }
  };

  const handleSwapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const resetRoute = () => {
    setFromStation("");
    setToStation("");
    setShowRoute(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50 to-green-50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-metro-blue via-metro-green to-metro-purple text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <CardTitle className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center">
              <Route className="h-8 w-8 mr-3" />
              Plan Your Metro Journey
            </CardTitle>
            <p className="text-center text-blue-100 mt-2">Find the best route between any two stations</p>
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Station Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-metro-blue" />
                  From Station
                </label>
                <Select value={fromStation} onValueChange={setFromStation}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-metro-blue transition-colors">
                    <SelectValue placeholder="Select departure station" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {stations.map((station) => (
                      <SelectItem key={station.id} value={station.name}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${
                            station.line === 'Blue' ? 'bg-metro-blue' :
                            station.line === 'Green' ? 'bg-metro-green' :
                            station.line === 'Purple' ? 'bg-metro-purple' :
                            'bg-metro-orange'
                          }`}></div>
                          <span>{station.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {station.line}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-metro-green" />
                  To Station
                </label>
                <Select value={toStation} onValueChange={setToStation}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-metro-green transition-colors">
                    <SelectValue placeholder="Select destination station" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {stations.map((station) => (
                      <SelectItem key={station.id} value={station.name}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${
                            station.line === 'Blue' ? 'bg-metro-blue' :
                            station.line === 'Green' ? 'bg-metro-green' :
                            station.line === 'Purple' ? 'bg-metro-purple' :
                            'bg-metro-orange'
                          }`}></div>
                          <span>{station.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {station.line}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={handleSwapStations}
                variant="outline"
                size="lg"
                disabled={!fromStation && !toStation}
                className="h-12 px-6 border-2 hover:bg-gray-50 transition-all duration-300"
              >
                <ArrowRightLeft className="h-5 w-5 mr-2" />
                Swap Stations
              </Button>
              
              <Button
                onClick={handleFindRoute}
                disabled={!fromStation || !toStation || fromStation === toStation}
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-metro-blue to-metro-green hover:from-metro-blue/90 hover:to-metro-green/90 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Route className="h-5 w-5 mr-2" />
                Find Route
              </Button>
              
              {showRoute && (
                <Button
                  onClick={resetRoute}
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 border-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300"
                >
                  Clear Route
                </Button>
              )}
            </div>

            {/* Quick Info Cards */}
            {(fromStation || toStation) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-metro-blue" />
                  <p className="text-sm font-medium text-gray-700">Average Journey</p>
                  <p className="text-lg font-bold text-metro-blue">15-45 mins</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <CreditCard className="h-6 w-6 mx-auto mb-2 text-metro-green" />
                  <p className="text-sm font-medium text-gray-700">Fare Range</p>
                  <p className="text-lg font-bold text-metro-green">₹5 - ₹25</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Route className="h-6 w-6 mx-auto mb-2 text-metro-purple" />
                  <p className="text-sm font-medium text-gray-700">Metro Lines</p>
                  <p className="text-lg font-bold text-metro-purple">4 Active</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Route Result */}
      {showRoute && fromStation && toStation && (
        <div className="mt-8 animate-fade-in">
          <RouteResult from={fromStation} to={toStation} />
        </div>
      )}
    </div>
  );
};

export default StationSelector;
