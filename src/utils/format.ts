import {
  RaceScheduleCardItemType,
  RaceScheduleItem,
} from "@app-types/trackRevClient/schedule";
import {
  ConstructorStandingsCardItemType,
  ConstructorStandingsItem,
} from "@app-types/trackRevClient/standings/constructors";
import {
  DriverStandingsCardItemType,
  DriverStandingsItem,
} from "@app-types/trackRevClient/standings/drivers";
import { getMonthName } from "./helpers";

export const getConstructorStandingCard = (
  item: ConstructorStandingsItem
): ConstructorStandingsCardItemType => {
  const obj: ConstructorStandingsCardItemType = {
    position: item.position,
    points: item.points,
    ConstructorName: item.constructorName,
    constructorId: item.constructorId,
  };
  return obj;
};

export const getDriverStandingCard = (
  item: DriverStandingsItem
): DriverStandingsCardItemType => {
  const obj: DriverStandingsCardItemType = {
    position: item.position,
    points: item.points,
    driverName: item.driverName,
    driverNumber: item.driverNumber,
    constructorName: item.constructorName,
    constructorId: item.constructorId,
  };
  return obj;
};

export const getRaceScheduleCard = (
  item: RaceScheduleItem
): RaceScheduleCardItemType => {
  const obj: RaceScheduleCardItemType = {
    round: item.round,
    raceName: item.raceName,
    circuitName: item.circuitName,
    startDate: parseInt(item.FirstPractice.date.split("-")[2]),
    endDate: parseInt(item.Race.date.split("-")[2]),
    startMonth: getMonthName(parseInt(item.FirstPractice.date.split("-")[1])),
    endMonth: getMonthName(parseInt(item.Race.date.split("-")[1])),
  };
  return obj;
};
