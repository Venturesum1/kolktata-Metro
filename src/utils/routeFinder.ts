export interface Station {
  id: string;
  name: string;
  short_name: string;
  line: string;
  color: string;
  position: number;
  image?: string;
  nearest_railway_station?: {
    name: string;
    distance_km: number;
  };
  next_station_distance_km: number;
  next_station_travel_time_min: number;
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

// Updated stations data based on your JSON
const stationsData: Station[] = [
  // Blue Line stations
  { id: "1", name: "Dakshineswar", short_name: "DKSW", line: "Blue", color: "#1e40af", position: 1, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dakshineswar_Metro_station_2022.jpg", nearest_railway_station: { name: "Dakshineswar Railway Station", distance_km: 0.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "2", name: "Baranagar", short_name: "BRNR", line: "Blue", color: "#1e40af", position: 2, image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Baranagar_Metro_station_2022.jpg", nearest_railway_station: { name: "Baranagar Railway Station", distance_km: 0.3 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "3", name: "Noapara", short_name: "NPRA", line: "Blue", color: "#1e40af", position: 3, image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Noapara_Metro_station_2017.jpg", nearest_railway_station: { name: "Noapara Railway Station", distance_km: 0.2 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "4", name: "Dum Dum", short_name: "DDUM", line: "Blue", color: "#1e40af", position: 4, image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Dum_Dum_Metro_station_2014.jpg", nearest_railway_station: { name: "Dum Dum Junction", distance_km: 0.1 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "5", name: "Belgachhia", short_name: "BGCH", line: "Blue", color: "#1e40af", position: 5, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Belgachhia_Metro_station.jpg", nearest_railway_station: { name: "Belgachhia Railway Station", distance_km: 0.3 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "6", name: "Shyambazar", short_name: "SYBZ", line: "Blue", color: "#1e40af", position: 6, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Shyambazar_Metro_station.jpg", nearest_railway_station: { name: "Shyambazar area (No direct railway station nearby)", distance_km: 1.2 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "7", name: "Shobhabazar Sutanuti", short_name: "SBST", line: "Blue", color: "#1e40af", position: 7, image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Shobhabazar_Sutanuti_Metro_station_2014.jpg", nearest_railway_station: { name: "Kolkata Railway Station", distance_km: 2.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "8", name: "Girish Park", short_name: "GRPK", line: "Blue", color: "#1e40af", position: 8, image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Girish_Park_Metro_station.jpg", nearest_railway_station: { name: "Kolkata Railway Station", distance_km: 2.3 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "9", name: "Mahatma Gandhi Road", short_name: "MGRD", line: "Blue", color: "#1e40af", position: 9, image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Mahatma_Gandhi_Road_Metro_station.jpg", nearest_railway_station: { name: "Howrah Railway Station", distance_km: 4.0 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "10", name: "Central", short_name: "CNTR", line: "Blue", color: "#1e40af", position: 10, image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Central_Metro_station_2014.jpg", nearest_railway_station: { name: "Howrah Railway Station", distance_km: 4.1 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "11", name: "Chandni Chowk", short_name: "CHCK", line: "Blue", color: "#1e40af", position: 11, image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chandni_Chowk_Metro_station_2012.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 4.7 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "12", name: "Esplanade", short_name: "ESPN", line: "Blue", color: "#1e40af", position: 12, image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Esplanade_Metro_station_2022.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 4.8 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "13", name: "Park Street", short_name: "PKST", line: "Blue", color: "#1e40af", position: 13, image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Park_Street_Metro_station_2012.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 5.0 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "14", name: "Maidan", short_name: "MDAN", line: "Blue", color: "#1e40af", position: 14, image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Maidan_Metro_station.jpg", nearest_railway_station: { name: "Howrah Railway Station", distance_km: 4.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "15", name: "Rabindra Sadan", short_name: "RSDN", line: "Blue", color: "#1e40af", position: 15, image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rabindra_Sadan_Metro_station_2014.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 5.1 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "16", name: "Netaji Bhavan", short_name: "NTBV", line: "Blue", color: "#1e40af", position: 16, image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Netaji_Bhavan_Metro_station.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 5.4 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "17", name: "Jatin Das Park", short_name: "JDPR", line: "Blue", color: "#1e40af", position: 17, image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jatin_Das_Park_Metro_station.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 5.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "18", name: "Kalighat", short_name: "KLGT", line: "Blue", color: "#1e40af", position: 18, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kalighat_Metro_station.jpg", nearest_railway_station: { name: "Tollygunge Railway Station", distance_km: 2.0 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "19", name: "Rabindra Sarobar", short_name: "RSRB", line: "Blue", color: "#1e40af", position: 19, image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rabindra_Sarobar_Metro_station.jpg", nearest_railway_station: { name: "Tollygunge Railway Station", distance_km: 1.8 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "20", name: "Mahanayak Uttam Kumar", short_name: "MUKR", line: "Blue", color: "#1e40af", position: 20, image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mahanayak_Uttam_Kumar_Metro_station.jpg", nearest_railway_station: { name: "Tollygunge Railway Station", distance_km: 1.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "21", name: "Netaji", short_name: "NTJI", line: "Blue", color: "#1e40af", position: 21, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Netaji_Metro_station.jpg", nearest_railway_station: { name: "Garia Railway Station", distance_km: 4.0 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "22", name: "Masterda Surya Sen", short_name: "MDSS", line: "Blue", color: "#1e40af", position: 22, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Masterda_Surya_Sen_Metro_station.jpg", nearest_railway_station: { name: "Garia Railway Station", distance_km: 4.5 }, next_station_distance_km: 1.29, next_station_travel_time_min: 3 },
  { id: "23", name: "Kavi Subhash", short_name: "KVSB", line: "Blue", color: "#1e40af", position: 23, image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kavi_Subhash_Metro_station.jpg", nearest_railway_station: { name: "Garia Railway Station", distance_km: 5.0 }, next_station_distance_km: 0, next_station_travel_time_min: 0 },

  // Green Line stations
  { id: "24", name: "Howrah Maidan", short_name: "HWMD", line: "Green", color: "#16a34a", position: 1, image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Howrah_Maidan_Metro_station.jpg", nearest_railway_station: { name: "Howrah Railway Station", distance_km: 1.2 }, next_station_distance_km: 0.7, next_station_travel_time_min: 1 },
  { id: "25", name: "Howrah", short_name: "HWRH", line: "Green", color: "#16a34a", position: 2, image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Howrah_Metro_station_2020.jpg", nearest_railway_station: { name: "Howrah Railway Station", distance_km: 0.5 }, next_station_distance_km: 1.0, next_station_travel_time_min: 1 },
  { id: "26", name: "Mahakaran", short_name: "MKRN", line: "Green", color: "#16a34a", position: 3, image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Mahakaran_Metro_station.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 5.4 }, next_station_distance_km: 0.9, next_station_travel_time_min: 1 },
  { id: "27", name: "Esplanade", short_name: "ESPN", line: "Green", color: "#16a34a", position: 4, image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Esplanade_Metro_station_2022.jpg", nearest_railway_station: { name: "B.B.D Bag Railway Station", distance_km: 0.7 }, next_station_distance_km: 1.1, next_station_travel_time_min: 1 },
  { id: "28", name: "Sealdah", short_name: "SLDH", line: "Green", color: "#16a34a", position: 5, image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Sealdah_Metro_station.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 0.3 }, next_station_distance_km: 1.8, next_station_travel_time_min: 2 },
  { id: "29", name: "Phoolbagan", short_name: "PHBG", line: "Green", color: "#16a34a", position: 6, image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Phoolbagan_Metro_station_2021.jpg", nearest_railway_station: { name: "Sealdah Railway Station", distance_km: 2.1 }, next_station_distance_km: 2.1, next_station_travel_time_min: 2 },
  { id: "30", name: "Salt Lake Stadium", short_name: "SLSM", line: "Green", color: "#16a34a", position: 7, image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Salt_Lake_Stadium_Metro_station.jpg", nearest_railway_station: { name: "Bidhannagar Road Railway Station", distance_km: 1.0 }, next_station_distance_km: 1.4, next_station_travel_time_min: 1 },
  { id: "31", name: "Bengal Chemical", short_name: "BGCL", line: "Green", color: "#16a34a", position: 8, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Bengal_Chemical_Metro_station.jpg", nearest_railway_station: { name: "Tollygunge Railway Station", distance_km: 3.5 }, next_station_distance_km: 1.0, next_station_travel_time_min: 1 },
  { id: "32", name: "City Centre", short_name: "CTCT", line: "Green", color: "#16a34a", position: 9, image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/City_Centre_Metro_station.jpg", nearest_railway_station: { name: "Bidhannagar Road Railway Station", distance_km: 2.4 }, next_station_distance_km: 0.8, next_station_travel_time_min: 1 },
  { id: "33", name: "Central Park", short_name: "CNPk", line: "Green", color: "#16a34a", position: 10, image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Central_Park_Metro_station_2017.jpg", nearest_railway_station: { name: "Bidhannagar Road Railway Station", distance_km: 1.3 }, next_station_distance_km: 1.4, next_station_travel_time_min: 1 },
  { id: "34", name: "Karunamoyee", short_name: "KRMY", line: "Green", color: "#16a34a", position: 11, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Karunamoyee_Metro_station_2017.jpg", nearest_railway_station: { name: "Bidhannagar Road Railway Station", distance_km: 2.7 }, next_station_distance_km: 1.4, next_station_travel_time_min: 1 },
  { id: "35", name: "Salt Lake Sector V", short_name: "SLSV", line: "Green", color: "#16a34a", position: 12, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Salt_Lake_Sector_V_Metro_station.jpg", nearest_railway_station: { name: "Bidhannagar Road Railway Station", distance_km: 3.5 }, next_station_distance_km: 0, next_station_travel_time_min: 0 },

  // Purple Line stations
  { id: "36", name: "IIM-Joka", short_name: "IIMJ", line: "Purple", color: "#a855f7", position: 1, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 2.5 }, next_station_distance_km: 1.5, next_station_travel_time_min: 3 },
  { id: "37", name: "Thakurpukur", short_name: "TKPR", line: "Purple", color: "#a855f7", position: 2, image: "https://images.unsplash.com/photo-1518770660439-4636190af475", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 3.0 }, next_station_distance_km: 1.2, next_station_travel_time_min: 2 },
  { id: "38", name: "Sakherbazar", short_name: "SKBZ", line: "Purple", color: "#a855f7", position: 3, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 3.3 }, next_station_distance_km: 1.0, next_station_travel_time_min: 2 },
  { id: "39", name: "Behala Chowrasta", short_name: "BHCH", line: "Purple", color: "#a855f7", position: 4, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 2.8 }, next_station_distance_km: 0.9, next_station_travel_time_min: 2 },
  { id: "40", name: "Behala Bazar", short_name: "BHBZ", line: "Purple", color: "#a855f7", position: 5, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 3.1 }, next_station_distance_km: 1.3, next_station_travel_time_min: 3 },
  { id: "41", name: "Taratala", short_name: "TRTL", line: "Purple", color: "#a855f7", position: 6, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 1.5 }, next_station_distance_km: 1.0, next_station_travel_time_min: 2 },
  { id: "42", name: "Majerhat", short_name: "MJRH", line: "Purple", color: "#a855f7", position: 7, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", nearest_railway_station: { name: "Majerhat Railway Station", distance_km: 0.3 }, next_station_distance_km: 0, next_station_travel_time_min: 0 },

  // Orange Line stations
  { id: "43", name: "Kavi Subhash", short_name: "KVSB", line: "Orange", color: "#ea580c", position: 1, image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", nearest_railway_station: { name: "New Garia Railway Station", distance_km: 0.5 }, next_station_distance_km: 1.8, next_station_travel_time_min: 3 },
  { id: "44", name: "Satyajit Ray", short_name: "STRY", line: "Orange", color: "#ea580c", position: 2, image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c", nearest_railway_station: { name: "Bantala Railway Station", distance_km: 3.2 }, next_station_distance_km: 1.5, next_station_travel_time_min: 2 },
  { id: "45", name: "Jyotirindra Nandi", short_name: "JYNN", line: "Orange", color: "#ea580c", position: 3, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", nearest_railway_station: { name: "Bantala Railway Station", distance_km: 3.5 }, next_station_distance_km: 1.1, next_station_travel_time_min: 2 },
  { id: "46", name: "Kavi Sukanta", short_name: "KVSK", line: "Orange", color: "#ea580c", position: 4, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", nearest_railway_station: { name: "Bhatpara Railway Station", distance_km: 5.0 }, next_station_distance_km: 1.0, next_station_travel_time_min: 2 },
  { id: "47", name: "Hemanta Mukhopadhyay", short_name: "HMMP", line: "Orange", color: "#ea580c", position: 5, image: "https://images.unsplash.com/photo-1518770660439-4636190af475", nearest_railway_station: { name: "Dumdum Railway Station", distance_km: 6.7 }, next_station_distance_km: 0, next_station_travel_time_min: 0 }
];

export const stations = stationsData;

const interchangeStations = ["Central", "Sealdah", "Esplanade", "Kavi Subhash"];

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

    const distance = Math.abs(endPos - startPos) * 1.3; // Updated distance calculation
    const duration = routeStations.length * 2.5; // Updated duration calculation
    const fare = calculateFare(distance);

    return {
      stations: routeStations,
      line: fromStationData.line,
      color: fromStationData.color,
      duration: Math.round(duration),
      distance: Math.round(distance * 10) / 10,
      fare,
      interchanges: []
    };
  }

  // Multi-line route with interchange
  let interchangeStation = "Central";
  if (fromStationData.line === "Green" || toStationData.line === "Green") {
    interchangeStation = "Sealdah";
  }

  const distance = 12.5; // Average multi-line distance
  const duration = 35; // Average multi-line duration
  const fare = calculateFare(distance);

  return {
    stations: [fromStation, interchangeStation, toStation],
    line: "Multi-line",
    color: "#6b7280",
    duration,
    distance,
    fare,
    interchanges: [interchangeStation]
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

export const getStationByName = (name: string): Station | undefined => {
  return stationsData.find(s => s.name === name);
};