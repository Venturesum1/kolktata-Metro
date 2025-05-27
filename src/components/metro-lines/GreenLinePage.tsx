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
      <div className="bg-gradient-to-r from-metro-green to-metro-green/80 text-white py-8 sm:py-10 md:py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Green Line Metro</h1>
          <p className="text-lg sm:text-xl opacity-90 mb-4 sm:mb-6">Salt Lake Sector V ⇄ Sealdah</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">East-West Corridor</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">14 KM Long</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">12 Stations</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">Opened 2020</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 mb-6 sm:mb-8">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="stations" className="text-xs sm:text-sm">Stations</TabsTrigger>
            <TabsTrigger value="map" className="text-xs sm:text-sm">Route Map</TabsTrigger>
            <TabsTrigger value="attractions" className="text-xs sm:text-sm">Attractions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-green">Green Line Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
                    <Train className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-green mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Modern Technology</h3>
                    <p className="text-sm sm:text-base text-gray-600">State-of-the-art signaling and safety systems</p>
                  </div>
                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
                    <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-green mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">East-West Link</h3>
                    <p className="text-sm sm:text-base text-gray-600">Connecting IT hub to central Kolkata</p>
                  </div>
                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center sm:col-span-2 lg:col-span-1">
                    <Clock className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-green mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Latest Addition</h3>
                    <p className="text-sm sm:text-base text-gray-600">Newest operational metro line</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed">
                    The Green Line represents the modern expansion of Kolkata's metro network, connecting the IT hub 
                    of Salt Lake Sector V to the busy railway junction at Sealdah. This East-West corridor features 
                    the latest in metro technology and plays a crucial role in connecting the IT sector with central Kolkata.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stations">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-green">Station List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {greenLineStations.map((station, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-metro-green text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{station}</span>
                      {station === "Sealdah" && <Badge className="ml-auto bg-orange-100 text-orange-700 text-xs">Interchange</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-green">Green Line Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 sm:p-8 text-center min-h-64 sm:min-h-96 flex items-center justify-center">
                  <div className="text-green-600">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg font-medium">Interactive Green Line Map</p>
                    <p className="text-xs sm:text-sm mt-2">Detailed route map will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attractions">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-green">Top Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {attractions.map((attraction, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-metro-green mb-2">{attraction.name}</h3>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-metro-green font-medium text-sm sm:text-base">{attraction.station} Station</span>
                          <Badge variant="outline" className="text-xs sm:text-sm">{attraction.distance}</Badge>
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