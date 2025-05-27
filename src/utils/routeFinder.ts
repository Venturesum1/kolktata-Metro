
export interface Station {
  id: string;
  name: string;
  line: string;
  color: string;
  position: number;
}

export interface RouteInfo {
  stations: string[];
  line: string;
  color: string;
  duration: number;
  distance: number;
  fare: number;
  interchanges: string[];
}

const stationsData: Station[] = [
  // Blue Line
  { id: "1", name: "Dakshineswar", line: "Blue", color: "#1e40af", position: 1 },
  { id: "2", name: "Baranagar", line: "Blue", color: "#1e40af", position: 2 },
  { id: "3", name: "Shyama Charan", line: "Blue", color: "#1e40af", position: 3 },
  { id: "4", name: "Sovabazar", line: "Blue", color: "#1e40af", position: 4 },
  { id: "5", name: "Shobhabazar", line: "Blue", color: "#1e40af", position: 5 },
  { id: "6", name: "Girish Park", line: "Blue", color: "#1e40af", position: 6 },
  { id: "7", name: "Mahatma Gandhi Road", line: "Blue", color: "#1e40af", position: 7 },
  { id: "8", name: "Central", line: "Blue", color: "#1e40af", position: 8 },
  { id: "9", name: "Chandni Chowk", line: "Blue", color: "#1e40af", position: 9 },
  { id: "10", name: "Park Street", line: "Blue", color: "#1e40af", position: 10 },
  { id: "11", name: "Maidan", line: "Blue", color: "#1e40af", position: 11 },
  { id: "12", name: "Rabindra Sadan", line: "Blue", color: "#1e40af", position: 12 },
  { id: "13", name: "Netaji Bhavan", line: "Blue", color: "#1e40af", position: 13 },
  { id: "14", name: "Jatin Das Park", line: "Blue", color: "#1e40af", position: 14 },
  { id: "15", name: "Kalighat", line: "Blue", color: "#1e40af", position: 15 },
  { id: "16", name: "Rabindra Sarobar", line: "Blue", color: "#1e40af", position: 16 },
  { id: "17", name: "Tollygunge", line: "Blue", color: "#1e40af", position: 17 },
  { id: "18", name: "Mahanayak Uttam Kumar", line: "Blue", color: "#1e40af", position: 18 },
  { id: "19", name: "Netaji", line: "Blue", color: "#1e40af", position: 19 },
  { id: "20", name: "Masterda Surya Sen", line: "Blue", color: "#1e40af", position: 20 },
  { id: "21", name: "Bansdroni", line: "Blue", color: "#1e40af", position: 21 },
  { id: "22", name: "Sakher Bazar", line: "Blue", color: "#1e40af", position: 22 },
  { id: "23", name: "Behala Chowrasta", line: "Blue", color: "#1e40af", position: 23 },
  { id: "24", name: "Behala Bazar", line: "Blue", color: "#1e40af", position: 24 },
  { id: "25", name: "New Garia", line: "Blue", color: "#1e40af", position: 25 },
  { id: "26", name: "Kavi Subhash", line: "Blue", color: "#1e40af", position: 26 },
  
  // Green Line
  { id: "27", name: "Salt Lake Sector V", line: "Green", color: "#16a34a", position: 1 },
  { id: "28", name: "Karunamoyee", line: "Green", color: "#16a34a", position: 2 },
  { id: "29", name: "Central Park", line: "Green", color: "#16a34a", position: 3 },
  { id: "30", name: "City Centre", line: "Green", color: "#16a34a", position: 4 },
  { id: "31", name: "Bengal Chemical", line: "Green", color: "#16a34a", position: 5 },
  { id: "32", name: "Salt Lake Stadium", line: "Green", color: "#16a34a", position: 6 },
  { id: "33", name: "Phool Bagan", line: "Green", color: "#16a34a", position: 7 },
  { id: "34", name: "Sealdah", line: "Green", color: "#16a34a", position: 8 },
];

export const stations = stationsData;

const interchangeStations = ["Central", "Sealdah"];

export const findRoute = (fromStation: string, toStation: string): RouteInfo | null => {
  const fromStationData = stationsData.find(s => s.name === fromStation);
  const toStationData = stationsData.find(s => s.name === toStation);
  
  if (!fromStationData || !toStationData) {
    return null;
  }
  
  // Same line route
  if (fromStationData.line === toStationData.line) {
    const startPos = Math.min(fromStationData.position, toStationData.position);
    const endPos = Math.max(fromStationData.position, toStationData.position);
    
    const routeStations = stationsData
      .filter(s => s.line === fromStationData.line && s.position >= startPos && s.position <= endPos)
      .sort((a, b) => a.position - b.position)
      .map(s => s.name);
    
    if (fromStationData.position > toStationData.position) {
      routeStations.reverse();
    }
    
    const distance = Math.abs(endPos - startPos) * 1.2; // Approximate km per station
    const duration = routeStations.length * 2; // 2 minutes per station
    const fare = calculateFare(distance);
    
    return {
      stations: routeStations,
      line: fromStationData.line,
      color: fromStationData.color,
      duration,
      distance: Math.round(distance * 10) / 10,
      fare,
      interchanges: []
    };
  }
  
  // Multi-line route (simplified for demo)
  return {
    stations: [fromStation, "Central", toStation],
    line: "Multi-line",
    color: "#6b7280",
    duration: 25,
    distance: 8.5,
    fare: 15,
    interchanges: ["Central"]
  };
};

const calculateFare = (distance: number): number => {
  if (distance <= 2) return 5;
  if (distance <= 5) return 10;
  if (distance <= 10) return 15;
  if (distance <= 20) return 20;
  return 25;
};

export const getAllStations = (): string[] => {
  return [...new Set(stationsData.map(s => s.name))];
};
