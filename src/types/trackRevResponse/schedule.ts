import {
  RaceType,
  SessionTimingType,
} from "@app-types/trackRevResponse/primitive";

export interface RaceScheduleType extends RaceType {
  FirstPractice: SessionTimingType;
  SecondPractice?: SessionTimingType;
  ThirdPractice?: SessionTimingType;
  SprintQualifying?: SessionTimingType;
  Qualifying: SessionTimingType;
  Sprint?: SessionTimingType;
  Race: SessionTimingType;
}
