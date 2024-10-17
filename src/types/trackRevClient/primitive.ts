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
