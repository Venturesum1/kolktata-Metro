
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { findRoute, RouteInfo } from "@/utils/routeFinder";

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

  return (
    <Card className="mt-6 border-l-4" style={{ borderLeftColor: route.color }}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Route: {from} → {to}</span>
          <Badge variant="secondary">{route.line}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-metro-blue">{route.stations.length}</div>
            <div className="text-sm text-gray-600">Stations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-metro-green">₹{route.fare}</div>
            <div className="text-sm text-gray-600">Fare</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-metro-purple">{route.duration} min</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Route Details ({route.distance} km)
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {route.stations.map((station, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-3 py-1 rounded-full text-sm ${
                  station === from || station === to 
                    ? 'bg-metro-blue text-white font-semibold' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {station}
                </div>
                {index < route.stations.length - 1 && (
                  <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                )}
              </div>
            ))}
          </div>
          
          {route.interchanges.length > 0 && (
            <div className="mt-4">
              <h5 className="font-medium text-sm text-gray-600 mb-2">Interchange Stations:</h5>
              <div className="flex flex-wrap gap-2">
                {route.interchanges.map((interchange, index) => (
                  <Badge key={index} variant="outline" className="bg-orange-50 text-orange-700">
                    {interchange}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RouteResult;
