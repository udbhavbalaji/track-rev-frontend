import { SessionTimingItem } from "./primitive";

export interface RaceScheduleItem {
  season: string;
  round: number;
  raceName: string;
  circuitName: string;
  FirstPractice: SessionTimingItem;
  Qualifying: SessionTimingItem;
  Race: SessionTimingItem;
  SecondPractice?: SessionTimingItem;
  ThirdPractice?: SessionTimingItem;
  SprintQualifying?: SessionTimingItem;
  Sprint?: SessionTimingItem;
}

export interface SeasonScheduleData {
  season: string;
  data: RaceScheduleItem[];
}

export interface SeasonScheduleContextType {
  [key: string]: RaceScheduleItem[];
}

export interface RaceScheduleCardItemType {
  round: number;
  raceName: string;
  circuitName: string;
  startDate: number;
  endDate: number;
  startMonth: string;
  endMonth: string;
}
