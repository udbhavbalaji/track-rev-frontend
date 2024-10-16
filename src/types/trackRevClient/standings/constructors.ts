export interface ConstructorStandingsItem {
  constructorId: string;
  constructorName: string;
  position: number;
  points: number;
  wins: number;
}

export interface ConstructorStandingsData {
  season: string;
  data: ConstructorStandingsItem[];
}

export interface ConstructorStandingsContextType {
  [key: string]: ConstructorStandingsItem[];
}

export interface ConstructorStandingsCardItemType {
  position: number;
  points: number;
  ConstructorName: string;
  constructorId: string;
}
