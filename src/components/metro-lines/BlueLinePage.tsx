import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Train } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const BlueLinePage = () => {
  const blueLineStations = [
    "Dakshineswar", "Baranagar", "Shyama Charan", "Sovabazar", "Shobhabazar", "Girish Park",
    "Mahatma Gandhi Road", "Central", "Chandni Chowk", "Park Street", "Maidan", "Rabindra Sadan",
    "Netaji Bhavan", "Jatin Das Park", "Kalighat", "Rabindra Sarobar", "Tollygunge", "Mahanayak Uttam Kumar",
    "Netaji", "Masterda Surya Sen", "Bansdroni", "Sakher Bazar", "Behala Chowrasta", "Behala Bazar",
    "New Garia", "Kavi Subhash"
  ];

  const attractions = [
    { name: "Kalighat Temple", station: "Kalighat", distance: "0.2 km" },
    { name: "Victoria Memorial", station: "Maidan", distance: "1.2 km" },
    { name: "Park Street Cemetery", station: "Park Street", distance: "0.5 km" },
    { name: "Dakshineswar Temple", station: "Dakshineswar", distance: "0.3 km" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <div className="bg-gradient-to-r from-metro-blue to-metro-blue/80 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blue Line Metro</h1>
          <p className="text-xl opacity-90">Dakshineswar ⇄ Kavi Subhash</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Badge className="bg-white/20 text-white">First Metro Line in India</Badge>
            <Badge className="bg-white/20 text-white">31 KM Long</Badge>
            <Badge className="bg-white/20 text-white">26 Stations</Badge>
            <Badge className="bg-white/20 text-white">Started 1984</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stations">Station List</TabsTrigger>
            <TabsTrigger value="map">Route Map</TabsTrigger>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-blue">Blue Line Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <Train className="h-12 w-12 text-metro-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">First in India</h3>
                    <p className="text-gray-600">India's first underground metro railway system</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <MapPin className="h-12 w-12 text-metro-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">31 KM Network</h3>
                    <p className="text-gray-600">Connecting North to South Kolkata</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <Clock className="h-12 w-12 text-metro-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Since 1984</h3>
                    <p className="text-gray-600">40 years of reliable service</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed">
                    The Blue Line is the backbone of Kolkata's metro network, connecting the northern suburb of Dakshineswar 
                    to the southern terminus at Kavi Subhash. This historic line was inaugurated on October 24, 1984, 
                    making it India's first operational metro railway system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stations" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-blue">Station List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blueLineStations.map((station, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <div className="w-8 h-8 bg-metro-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium">{station}</span>
                      {station === "Central" && <Badge className="ml-auto bg-orange-100 text-orange-700">Interchange</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-blue">Blue Line Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 text-center min-h-96 flex items-center justify-center">
                  <div className="text-blue-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg">Interactive Blue Line Map</p>
                    <p className="text-sm">Detailed route map will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attractions" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-blue">Top Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {attractions.map((attraction, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-metro-blue mb-2">{attraction.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-metro-blue font-medium">{attraction.station} Station</span>
                          <Badge variant="outline">{attraction.distance}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlueLinePage;
