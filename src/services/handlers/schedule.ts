import {
  RaceScheduleItem,
  SeasonScheduleData,
} from "@app-types/trackRevClient/schedule";
import { RaceScheduleType } from "@app-types/trackRevResponse/schedule";

export const handleRaceSchedule = (
  data: RaceScheduleType
): RaceScheduleItem => {
  const raceScheduleItem: RaceScheduleItem = {
    season: data.season,
    round: data.round,
    raceName: data.raceName,
    circuitName: data.circuitName,
    FirstPractice: data.FirstPractice,
    SecondPractice: data.SecondPractice,
    ThirdPractice: data.ThirdPractice,
    SprintQualifying: data.SprintQualifying,
    Sprint: data.Sprint,
    Qualifying: data.Qualifying,
    Race: data.Race,
  };
  return raceScheduleItem;
};

// export const handleSeasonSchedule = (
//   data: RaceScheduleType[]
// ): SeasonScheduleData => {
//   const schedule = data.map((item) => {
//     const obj: RaceScheduleItem = {
//       season: item.season,
//       round: item.round,
//       raceName: item.raceName,
//       circuitName: item.circuitName,
//       FirstPractice: item.FirstPractice,
//       SecondPractice: item.SecondPractice,
//       ThirdPractice: item.ThirdPractice,
//       SprintQualifying: item.SprintQualifying,
//       Sprint: item.Sprint,
//       Qualifying: item.Qualifying,
//       Race: item.Race,
//     };
//     return obj;
//   });
//   const processedSeason: SeasonScheduleData = {
//     season: data[0].season,
//     data: schedule,
//   };
//   return processedSeason;
// };
