import {
  ConstructorStandingsCardItemType,
  ConstructorStandingsItem,
} from "@app-types/trackRevClient/standings/constructors";
import {
  DriverStandingsCardItemType,
  DriverStandingsItem,
} from "@app-types/trackRevClient/standings/drivers";

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
