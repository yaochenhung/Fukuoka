export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  id: string;
  name: string;
  jpName?: string;
  type: 'hotel' | 'attraction' | 'food' | 'shopping';
  area: '博多' | '天神' | '大濠公園' | '門司港・小倉' | '太宰府・柳川' | '海之中道';
  address: string;
  phone?: string;
  coordinates: Coordinates;
  description: string;
  transport: string[];
  details: string[];
  openingHours?: string;
  tickets?: string;
  tips?: string[];
  image?: string;
}

export interface TimetableRow {
  trainNo?: string;
  departure: string;
  stationTimes: { [stationId: string]: string }; // Map of stationId to time
}

export interface RouteOption {
  method: string;
  time: string;
  cost: string;
  steps: string[];
}
