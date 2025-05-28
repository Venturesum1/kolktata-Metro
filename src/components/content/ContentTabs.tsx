import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight, Train, MapPin, Calendar, Info, CreditCard, Newspaper, HelpCircle, Camera, Network } from "lucide-react";
import { Link } from "react-router-dom";

const ContentTabs = () => {
  const metroLines = [
    { name: "Blue Line", status: "✓ AC", color: "bg-metro-blue", terminals: "Dakshineswar ⇄ Kavi Subhash", stations: 23, length: "32.25 KM", route: "/blue-line" },
    { name: "Green Line", status: "✓ AC", color: "bg-metro-green", terminals: "Howrah Maidan ⇄ Salt Lake Sector V", stations: 12, length: "16.6 KM", route: "/green-line" },
    { name: "Purple Line", status: "✓ AC", color: "bg-metro-purple", terminals: "IIM-Joka ⇄ Majerhat", stations: 7, length: "7.75 KM", route: "/purple-line" },
    { name: "Orange Line", status: "✓ AC", color: "bg-metro-orange", terminals: "Kavi Subhash ⇄ Hemanta Mukhopadhyay", stations: 5, length: "5.4 KM", route: "/orange-line" },
    { name: "Yellow Line", status: "✕ UC", color: "bg-metro-yellow", terminals: "Dum Dum Cantt ⇄ Barasat", stations: 0, length: "Under Construction", route: "/yellow-line" },
    { name: "Pink Line", status: "✕ PL", color: "bg-metro-pink", terminals: "Krishna Kali ⇄ Mangal Pandey", stations: 0, length: "Planned", route: "/pink-line" }
  ];

  const fareChart = [
    { zone: "I", distance: "0–2 km", line1: "₹5", line2: "₹5" },
    { zone: "II", distance: "2–5 km", line1: "₹10", line2: "₹10" },
    { zone: "III", distance: "5–10 km", line1: "₹15", line2: "₹20" },
    { zone: "IV", distance: "10–20 km", line1: "₹20", line2: "₹30" },
    { zone: "V", distance: "20–30 km", line1: "₹25", line2: "–" }
  ];

  const attractions = [
    { name: "Indian Museum", station: "Park Street", distance: "0.8 km", description: "Largest and oldest museum in India" },
    { name: "Kalighat Temple", station: "Kalighat", distance: "0.2 km", description: "Famous Hindu temple dedicated to Goddess Kali" },
    { name: "Victoria Memorial", station: "Maidan", distance: "1.2 km", description: "Magnificent marble monument and museum" },
    { name: "Howrah Bridge", station: "Central", distance: "2.1 km", description: "Iconic cantilever bridge over Hooghly River" },
    { name: "Eden Gardens", station: "Maidan", distance: "1.5 km", description: "Historic cricket stadium and venue" },
    { name: "Birla Planetarium", station: "Rabindra Sadan", distance: "0.5 km", description: "One of the largest planetariums in Asia" }
  ];

  const news = [
    { title: "Orange Line Expansion Completed", date: "May 20, 2025", summary: "New stations Satyajit Ray and Jyotirindra Nandi now operational with enhanced connectivity." },
    { title: "Smart Card Integration Enhanced", date: "May 15, 2025", summary: "Updated digital payment options now available across all active metro lines with contactless features." },
    { title: "Purple Line Service Improvements", date: "May 10, 2025", summary: "Increased frequency and improved accessibility features for IIM-Joka to Majerhat corridor." },
    { title: "Metro Timing Extended for Summer", date: "May 5, 2025", summary: "Special extended hours announced for summer season with last train at 11:15 PM." }
  ];

  const tabData = [
    { value: "overview", label: "Overview", icon: Info, color: "metro-blue" },
    { value: "lines", label: "Metro Lines", icon: Train, color: "metro-green" },
    { value: "map", label: "Network Map", icon: MapPin, color: "metro-purple" },
    { value: "fares", label: "Fare Chart", icon: CreditCard, color: "metro-orange" },
    { value: "news", label: "News", icon: Newspaper, color: "metro-blue" },
    { value: "faqs", label: "FAQs", icon: HelpCircle, color: "metro-green" },
    { value: "attractions", label: "Attractions", icon: Camera, color: "metro-purple" },
    { value: "networks", label: "Other Networks", icon: Network, color: "metro-orange" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Tabs defaultValue="overview" className="w-full">
        {/* Fixed Scrollable Tab List */}
        <div className="mb-8">
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="inline-flex h-auto items-center justify-start rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-1 shadow-inner w-max">
              {tabData.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-fit data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transform hover:shadow-md hover:bg-white/50"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <ScrollBar orientation="horizontal" className="mt-2" />
          </ScrollArea>
        </div>

        <TabsContent value="overview" className="mt-8">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="bg-gradient-to-r from-metro-blue to-metro-green text-white rounded-t-lg">
              <CardTitle className="text-3xl flex items-center">
                <Info className="h-8 w-8 mr-3" />
                Overview & History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  The Kolkata Metro, officially known as the Kolkata Metro Railway, is India's first underground metro railway system.
                  Inaugurated on October 24, 1984, it has been a cornerstone of public transportation in the City of Joy for nearly four decades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-metro-blue/10 to-metro-green/10 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-metro-blue flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Key Milestones
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-blue rounded-full mr-3"></div>
                        1984: First metro service in India begins
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-green rounded-full mr-3"></div>
                        1995: Extended to Tollygunge
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-purple rounded-full mr-3"></div>
                        2009: Full North-South corridor completed
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-orange rounded-full mr-3"></div>
                        2020: East-West corridor (Green Line) opens
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-yellow rounded-full mr-3"></div>
                        2021: Purple Line begins operations
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-pink rounded-full mr-3"></div>
                        2025: Orange Line expansion completed
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-metro-purple/10 to-metro-orange/10 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-metro-purple flex items-center">
                      <Train className="h-5 w-5 mr-2" />
                      Current Network
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-blue rounded-full mr-3"></div>
                        47 operational stations across 4 lines
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-green rounded-full mr-3"></div>
                        62+ km total network length
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-purple rounded-full mr-3"></div>
                        Modern air-conditioned trains
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-orange rounded-full mr-3"></div>
                        Digital payment integration
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-metro-yellow rounded-full mr-3"></div>
                        Enhanced accessibility features
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lines" className="mt-8">
          <div className="grid gap-6">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-metro-green to-metro-blue text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <Train className="h-8 w-8 mr-3" />
                  Metro Lines & Terminal Stations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6">
                  {metroLines.map((line, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-r from-white to-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-6 h-16 ${line.color} rounded-lg shadow-lg`}></div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800">{line.name}</h3>
                              <p className="text-gray-600 font-medium">{line.terminals}</p>
                              <div className="flex items-center space-x-4 mt-3">
                                <Badge
                                  variant={line.status.includes('✓') ? 'default' : 'secondary'}
                                  className={line.status.includes('✓') ? 'bg-green-500 hover:bg-green-600' : ''}
                                >
                                  {line.status}
                                </Badge>
                                <span className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {line.stations} stations
                                </span>
                                <span className="text-sm text-gray-500">{line.length}</span>
                              </div>
                            </div>
                          </div>
                          <Link to={line.route}>
                            <Button variant="outline" size="sm" className="hover:bg-metro-blue hover:text-white transition-colors">
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-purple">Network Map</CardTitle>
              <CardDescription>Interactive Kolkata Metro network map showing all lines and stations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 text-center min-h-96 flex items-center justify-center">
                <div className="text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Network Map</p>
                  <p className="text-sm">Detailed metro map will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fares" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-orange">Fare Chart</CardTitle>
              <CardDescription>Metro fare structure by distance and payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-metro-orange/10">
                      <th className="border border-gray-300 px-4 py-3 text-left">Zone</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Distance</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Line 1 Fare</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Line 2 Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fareChart.map((fare, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{fare.zone}</td>
                        <td className="border border-gray-300 px-4 py-3">{fare.distance}</td>
                        <td className="border border-gray-300 px-4 py-3 text-metro-blue font-semibold">{fare.line1}</td>
                        <td className="border border-gray-300 px-4 py-3 text-metro-green font-semibold">{fare.line2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-metro-blue">Smart Card Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 10% discount on regular fares</li>
                      <li>• No queuing for tokens</li>
                      <li>• Instant recharge options</li>
                      <li>• Valid across all metro lines</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-metro-green">Child Travel Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Free for up to 3 children under 90 cm height</li>
                      <li>• Must be accompanied by an adult</li>
                      <li>• Full fare applies if over 90 cm</li>
                      <li>• Valid ID may be required</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-blue">Latest News</CardTitle>
              <CardDescription>Stay updated with the latest developments in Kolkata Metro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-metro-blue">{item.title}</h3>
                        <Badge variant="outline">{item.date}</Badge>
                      </div>
                      <p className="text-gray-600">{item.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-green">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="timing">
                  <AccordionTrigger>What are the metro operating hours?</AccordionTrigger>
                  <AccordionContent>
                    Kolkata Metro operates from 06:45 AM to 10:45 PM on all days. The frequency varies throughout the day, with peak hour services running every 3-5 minutes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cards">
                  <AccordionTrigger>How do I get a smart card?</AccordionTrigger>
                  <AccordionContent>
                    Smart cards are available at all metro stations from the ticket counters. You need to pay a refundable security deposit along with the initial recharge amount.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accessibility">
                  <AccordionTrigger>Are the stations wheelchair accessible?</AccordionTrigger>
                  <AccordionContent>
                    Most newer stations have lifts and ramps for wheelchair access. However, some older stations may have limited accessibility. It's recommended to check specific station facilities before traveling.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="luggage">
                  <AccordionTrigger>What are the luggage restrictions?</AccordionTrigger>
                  <AccordionContent>
                    Passengers can carry reasonable personal luggage. Large items, hazardous materials, and items exceeding specific size limits are not permitted. Security screening is mandatory.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attractions" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-purple">Top Attractions Near Metro Stations</CardTitle>
              <CardDescription>Discover Kolkata's iconic destinations accessible via metro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-metro-purple">{attraction.name}</h3>
                        <Badge variant="outline">{attraction.distance}</Badge>
                      </div>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-metro-blue mr-2" />
                        <span className="text-metro-blue font-medium">{attraction.station} Station</span>
                      </div>
                      <p className="text-gray-600">{attraction.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="networks" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-metro-orange">Explore Other Metro Networks</CardTitle>
              <CardDescription>Discover metro systems across India</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Train className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Delhi Metro</h3>
                    <p className="text-gray-600 text-sm">India's largest metro network with 12 lines covering the National Capital Region</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Train className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mumbai Metro</h3>
                    <p className="text-gray-600 text-sm">Modern metro system serving Mumbai with multiple lines under construction</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Train className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bangalore Metro</h3>
                    <p className="text-gray-600 text-sm">Namma Metro serving Bengaluru with Purple and Green line networks</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentTabs;