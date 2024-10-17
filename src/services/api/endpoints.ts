import {
  EndPointItem,
  RequestTypes,
} from "@app-types/trackRevClient/primitive";
import {
  RaceScheduleItem,
  SeasonScheduleData,
} from "@app-types/trackRevClient/schedule";
import {
  ConstructorStandingsData,
  ConstructorStandingsItem,
} from "@app-types/trackRevClient/standings/constructors";
import { DriverStandingsData } from "@app-types/trackRevClient/standings/drivers";
import { RaceScheduleType } from "@app-types/trackRevResponse/schedule";
import {
  ConstructorStandingsResponse,
  DriverStandingsResponse,
} from "@app-types/trackRevResponse/standings";
// import { handleSeasonSchedule } from "@services/handlers/schedule";
import { handleRaceSchedule } from "@services/handlers/schedule";
// import {
//   EndPointItem,
//   RequestTypes,
// } from "@app-types/trackRevClient/primitive";
import {
  handleConstructorStandings,
  handleDriverStandings,
} from "@services/handlers/standings";

export const ConstructorStandingEndpoint: EndPointItem<
  ConstructorStandingsResponse,
  ConstructorStandingsData
> = {
  reqType: RequestTypes.ConstructorStandings,
  url: "http://localhost:3000/api/constructors/standings",
  handler: handleConstructorStandings,
};

export const DriverStandingEndpoint: EndPointItem<
  DriverStandingsResponse,
  DriverStandingsData
> = {
  reqType: RequestTypes.DriverStandings,
  url: "http://localhost:3000/api/drivers/standings",
  handler: handleDriverStandings,
};

export const SeasonScheduleEndpoint: EndPointItem<
  RaceScheduleType,
  RaceScheduleItem
> = {
  reqType: RequestTypes.SeasonSchedule,
  url: "http://localhost:3000/api/races/schedule",
  handler: handleRaceSchedule,
};
