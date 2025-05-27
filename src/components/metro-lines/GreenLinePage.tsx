import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Train } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const GreenLinePage = () => {
  const greenLineStations = [
    "Salt Lake Sector V", "Karunamoyee", "Central Park", "City Centre", 
    "Bengal Chemical", "Salt Lake Stadium", "Phool Bagan", "Sealdah"
  ];

  const attractions = [
    { name: "Salt Lake Stadium", station: "Salt Lake Stadium", distance: "0.1 km" },
    { name: "Sealdah Railway Station", station: "Sealdah", distance: "0.2 km" },
    { name: "City Centre Mall", station: "City Centre", distance: "0.3 km" },
    { name: "Central Park", station: "Central Park", distance: "0.1 km" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <div className="bg-gradient-to-r from-metro-green to-metro-green/80 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Green Line Metro</h1>
          <p className="text-xl opacity-90">Salt Lake Sector V ⇄ Sealdah</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Badge className="bg-white/20 text-white">East-West Corridor</Badge>
            <Badge className="bg-white/20 text-white">14 KM Long</Badge>
            <Badge className="bg-white/20 text-white">12 Stations</Badge>
            <Badge className="bg-white/20 text-white">Opened 2020</Badge>
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
                <CardTitle className="text-3xl text-metro-green">Green Line Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <Train className="h-12 w-12 text-metro-green mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                    <p className="text-gray-600">State-of-the-art signaling and safety systems</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <MapPin className="h-12 w-12 text-metro-green mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">East-West Link</h3>
                    <p className="text-gray-600">Connecting IT hub to central Kolkata</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <Clock className="h-12 w-12 text-metro-green mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Latest Addition</h3>
                    <p className="text-gray-600">Newest operational metro line</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed">
                    The Green Line represents the modern expansion of Kolkata's metro network, connecting the IT hub 
                    of Salt Lake Sector V to the busy railway junction at Sealdah. This East-West corridor features 
                    the latest in metro technology and plays a crucial role in connecting the IT sector with central Kolkata.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stations" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-green">Station List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {greenLineStations.map((station, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="w-8 h-8 bg-metro-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium">{station}</span>
                      {station === "Sealdah" && <Badge className="ml-auto bg-orange-100 text-orange-700">Interchange</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-green">Green Line Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 text-center min-h-96 flex items-center justify-center">
                  <div className="text-green-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg">Interactive Green Line Map</p>
                    <p className="text-sm">Detailed route map will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attractions" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-metro-green">Top Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {attractions.map((attraction, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-metro-green mb-2">{attraction.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-metro-green font-medium">{attraction.station} Station</span>
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

export default GreenLinePage;
