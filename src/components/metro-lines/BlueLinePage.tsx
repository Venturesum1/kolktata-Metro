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
      <div className="bg-gradient-to-r from-metro-blue to-metro-blue/80 text-white py-8 sm:py-10 md:py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Blue Line Metro</h1>
          <p className="text-lg sm:text-xl opacity-90 mb-4 sm:mb-6">Dakshineswar ⇄ Kavi Subhash</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">First Metro Line in India</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">31 KM Long</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">26 Stations</Badge>
            <Badge className="bg-white/20 text-white text-xs sm:text-sm">Started 1984</Badge>
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
                <CardTitle className="text-2xl sm:text-3xl text-metro-blue">Blue Line Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-center">
                    <Train className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-blue mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">First in India</h3>
                    <p className="text-sm sm:text-base text-gray-600">India's first underground metro railway system</p>
                  </div>
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-center">
                    <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-blue mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">31 KM Network</h3>
                    <p className="text-sm sm:text-base text-gray-600">Connecting North to South Kolkata</p>
                  </div>
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-center sm:col-span-2 lg:col-span-1">
                    <Clock className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-metro-blue mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Since 1984</h3>
                    <p className="text-sm sm:text-base text-gray-600">40 years of reliable service</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed">
                    The Blue Line is the backbone of Kolkata's metro network, connecting the northern suburb of Dakshineswar 
                    to the southern terminus at Kavi Subhash. This historic line was inaugurated on October 24, 1984, 
                    making it India's first operational metro railway system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stations">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-blue">Station List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {blueLineStations.map((station, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-metro-blue text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{station}</span>
                      {station === "Central" && <Badge className="ml-auto bg-orange-100 text-orange-700 text-xs">Interchange</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-blue">Blue Line Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 sm:p-8 text-center min-h-64 sm:min-h-96 flex items-center justify-center">
                  <div className="text-blue-600">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg font-medium">Interactive Blue Line Map</p>
                    <p className="text-xs sm:text-sm mt-2">Detailed route map will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attractions">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-metro-blue">Top Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {attractions.map((attraction, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-metro-blue mb-2">{attraction.name}</h3>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-metro-blue font-medium text-sm sm:text-base">{attraction.station} Station</span>
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

export default BlueLinePage;