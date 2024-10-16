import {
  EndPointItem,
  RequestTypes,
} from "@app-types/trackRevClient/primitive";
import {
  ConstructorStandingsData,
  ConstructorStandingsItem,
} from "@app-types/trackRevClient/standings/constructors";
import { DriverStandingsData } from "@app-types/trackRevClient/standings/drivers";
import {
  ConstructorStandingsResponse,
  DriverStandingsResponse,
} from "@app-types/trackRevResponse/standings";
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
