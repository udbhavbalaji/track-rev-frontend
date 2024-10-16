import {
  ConstructorStandingsData,
  ConstructorStandingsItem,
} from "@app-types/trackRevClient/standings/constructors";
import {
  DriverStandingsData,
  DriverStandingsItem,
} from "@app-types/trackRevClient/standings/drivers";
import {
  ConstructorStandingsResponse,
  DriverStandingsResponse,
} from "@app-types/trackRevResponse/standings";

export const handleConstructorStandings = (
  data: ConstructorStandingsResponse
): ConstructorStandingsData => {
  const standings: ConstructorStandingsItem[] = [];

  data.Standings.forEach((item) => {
    const obj: ConstructorStandingsItem = {
      constructorId: item.constructorId,
      constructorName: item.constructorName,
      position: item.position,
      points: item.points,
      wins: item.wins,
    };
    standings.push(obj);
  });

  const transformedStandings: ConstructorStandingsData = {
    season: data.season,
    data: standings,
  };

  return transformedStandings;
};

export const handleDriverStandings = (
  data: DriverStandingsResponse
): DriverStandingsData => {
  const standings: DriverStandingsItem[] = data.Standings.map((item) => {
    const obj: DriverStandingsItem = {
      driverNumber: item.driverNumber,
      driverName: item.driverName,
      position: item.position,
      points: item.points,
      wins: item.wins,
      constructorId: item.constructorId,
      constructorName: item.constructorName,
    };
    return obj;
  });
  const transformedStandings: DriverStandingsData = {
    season: data.season,
    data: standings,
  };
  return transformedStandings;
};
