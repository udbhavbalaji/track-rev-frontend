export interface DriverStandingsItem {
  driverNumber: number;
  driverName: string;
  position: number;
  points: number;
  wins: number;
  constructorName: string;
  constructorId: string;
}

export interface DriverStandingsData {
  season: string;
  data: DriverStandingsItem[];
}

export interface DriverStandingsContextType {
  [key: string]: DriverStandingsItem[];
}

export interface DriverStandingsCardItemType {
  position: number;
  points: number;
  driverName: string;
  driverNumber: number;
  constructorName: string;
  constructorId: string;
}
