import { SeasonScheduleContextType } from "./schedule";
import {
  ConstructorStandingsContextType,
  // ConstructorStandingsItem,
} from "./standings/constructors";
import { DriverStandingsContextType } from "./standings/drivers";

export interface ErgastLoadedDataContextType {
  constructorStandingsData: ConstructorStandingsContextType;
  driverStandingsData: DriverStandingsContextType;
  seasonScheduleData: SeasonScheduleContextType;
  years: {
    [key: string]: string;
  };
  setYears: (reqType: string, year: string) => void;
  fetchConstructorStandingsData: () => Promise<void>;
  fetchDriverStandingsData: () => Promise<void>;
  fetchSeasonScheduleData: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

export interface EndPointItem<T, R> {
  reqType: RequestTypes;
  url: string;
  handler: (data: T) => R;
}

export enum RequestTypes {
  ConstructorStandings,
  DriverStandings,
  SeasonSchedule,
  RaceResults,
  QualifyingResults,
  SprintResults,
}

export interface SessionTimingItem {
  date: string;
  time: string;
}
