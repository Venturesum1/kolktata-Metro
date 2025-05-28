import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, MapPin, Train } from "lucide-react";
import { findRoute, RouteInfo, getStationByName } from "@/utils/routeFinder";

interface RouteResultProps {
  from: string;
  to: string;
}

const RouteResult = ({ from, to }: RouteResultProps) => {
  const route = findRoute(from, to);

  if (!route) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">No route found between the selected stations.</p>
        </CardContent>
      </Card>
    );
  }

  const fromStation = getStationByName(from);
  const toStation = getStationByName(to);

  return (
    <Card className="mt-6 border-l-4" style={{ borderLeftColor: route.color }}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-lg md:text-xl">Route: {from} → {to}</span>
          <Badge variant="secondary" className="text-sm">{route.line}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Route Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-metro-blue">{route.stations.length}</div>
            <div className="text-sm text-gray-600">Stations</div>
          </div>
          <div className="text-center bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-metro-green">₹{route.fare}</div>
            <div className="text-sm text-gray-600">Fare</div>
          </div>
          <div className="text-center bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-metro-purple">{route.duration} min</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
          <div className="text-center bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-metro-orange">{route.distance} km</div>
            <div className="text-sm text-gray-600">Distance</div>
          </div>
        </div>

        {/* Station Images */}
        {(fromStation?.image || toStation?.image) && (
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center">
              <Train className="h-4 w-4 mr-2" />
              Station Images
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fromStation?.image && (
                <div className="space-y-2">
                  <img
                    src={fromStation.image}
                    alt={from}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop";
                    }}
                  />
                  <p className="text-sm font-medium text-center">{from} Station</p>
                  {fromStation.short_name && (
                    <p className="text-xs text-gray-500 text-center">({fromStation.short_name})</p>
                  )}
                </div>
              )}
              {toStation?.image && (
                <div className="space-y-2">
                  <img
                    src={toStation.image}
                    alt={to}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop";
                    }}
                  />
                  <p className="text-sm font-medium text-center">{to} Station</p>
                  {toStation.short_name && (
                    <p className="text-xs text-gray-500 text-center">({toStation.short_name})</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Route Details */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Route Details
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {route.stations.map((station, index) => {
              const stationData = getStationByName(station);
              return (
                <div key={index} className="flex items-center">
                  <div className={`px-3 py-2 rounded-full text-sm flex items-center space-x-2 ${station === from || station === to
                      ? 'bg-metro-blue text-white font-semibold'
                      : 'bg-gray-100 text-gray-700'
                    }`}>
                    <span>{station}</span>
                    {stationData?.short_name && (
                      <span className="text-xs opacity-75">({stationData.short_name})</span>
                    )}
                  </div>
                  {index < route.stations.length - 1 && (
                    <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                  )}
                </div>
              );
            })}
          </div>

          {route.interchanges.length > 0 && (
            <div className="mt-4">
              <h5 className="font-medium text-sm text-gray-600 mb-2">Interchange Stations:</h5>
              <div className="flex flex-wrap gap-2">
                {route.interchanges.map((interchange, index) => (
                  <Badge key={index} variant="outline" className="bg-orange-50 text-orange-700">
                    <MapPin className="h-3 w-3 mr-1" />
                    {interchange}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Nearest Railway Stations */}
        {(fromStation?.nearest_railway_station || toStation?.nearest_railway_station) && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-gray-600">Nearest Railway Stations:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fromStation?.nearest_railway_station && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">{from}:</p>
                  <p className="text-xs text-gray-600">
                    {fromStation.nearest_railway_station.name}
                    ({fromStation.nearest_railway_station.distance_km} km away)
                  </p>
                </div>
              )}
              {toStation?.nearest_railway_station && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">{to}:</p>
                  <p className="text-xs text-gray-600">
                    {toStation.nearest_railway_station.name}
                    ({toStation.nearest_railway_station.distance_km} km away)
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RouteResult;