import {
  ErgastLoadedDataContextType,
  RequestTypes,
} from "@app-types/trackRevClient/primitive";
import {
  ConstructorStandingsContextType,
  ConstructorStandingsData,
} from "@app-types/trackRevClient/standings/constructors";
import {
  ConstructorStandingsResponse,
  DriverStandingsResponse,
} from "@app-types/trackRevResponse/standings";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  ConstructorStandingEndpoint,
  DriverStandingEndpoint,
  SeasonScheduleEndpoint,
} from "@services/api/endpoints";
import { fetchData } from "@services/api/client";
import {
  DriverStandingsContextType,
  DriverStandingsData,
} from "@app-types/trackRevClient/standings/drivers";
import {
  RaceScheduleItem,
  SeasonScheduleContextType,
  SeasonScheduleData,
} from "@app-types/trackRevClient/schedule";
import { RaceScheduleType } from "@app-types/trackRevResponse/schedule";

export const ErgastContext = createContext<ErgastLoadedDataContextType | null>(
  null
);

interface ErgastProviderProps {
  children: ReactNode;
}

const ErgastProvider: React.FC<ErgastProviderProps> = ({ children }) => {
  const [constructorStandingsData, setConstructorStandingsData] = useState<
    ConstructorStandingsContextType | undefined
  >(undefined);
  const [driverStandingsData, setDriverStandingsData] = useState<
    DriverStandingsContextType | undefined
  >(undefined);

  const [seasonScheduleData, setSeasonSchedule] = useState<
    SeasonScheduleContextType | undefined
  >(undefined);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [years, setYears] = useState({
    constructorStandings: "2024",
    driverStandings: "2024",
    seasonSchedule: "2024",
  });

  const handleYearUpdate = (reqType: string, year: string) => {
    setYears((prevYears) => ({ ...prevYears, [reqType]: year }));
  };

  const handleStandingsUpdate = () => {};

  const fetchConstructorStandingsData = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchData(
        `${ConstructorStandingEndpoint.url}/${years.constructorStandings}`,
        ConstructorStandingEndpoint.handler
      );

      if (Array.isArray(data)) {
        setError("Receiving invalid constructors standings.");
        return;
      }

      if (!constructorStandingsData) {
        let obj: ConstructorStandingsContextType = {};
        obj[data.season] = data.data;
        setConstructorStandingsData(obj);
      } else {
        let obj = constructorStandingsData;
        obj[data.season] = data.data;
        setConstructorStandingsData(obj);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDriverStandingsData = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchData(
        `${DriverStandingEndpoint.url}/${years.driverStandings}`,
        DriverStandingEndpoint.handler
      );

      if (Array.isArray(data)) {
        setError("Receiving invalid constructors standings.");
        return;
      }

      if (!driverStandingsData) {
        let obj: DriverStandingsContextType = {};
        obj[data.season] = data.data;
        setDriverStandingsData(obj);
      } else {
        let obj = driverStandingsData;
        obj[data.season] = data.data;
        setDriverStandingsData(obj);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSeasonScheduleData = async () => {
    // console.log("im coming here");
    setError(null);
    setLoading(true);
    try {
      const schedules = await fetchData<RaceScheduleType, RaceScheduleItem>(
        `${SeasonScheduleEndpoint.url}/${years.seasonSchedule}`,
        SeasonScheduleEndpoint.handler
      );
      if (!Array.isArray(schedules)) {
        throw new Error("Receiving invalid schedule data");
      }
      const processedSchedules: SeasonScheduleData = {
        season: schedules[0].season,
        data: schedules,
      };
      if (!seasonScheduleData) {
        let obj: SeasonScheduleContextType = {};
        obj[processedSchedules.season] = processedSchedules.data;
        setSeasonSchedule(obj);
        // console.log(obj);
      } else {
        let obj = seasonScheduleData;
        obj[processedSchedules.season] = processedSchedules.data;
        setSeasonSchedule(obj);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // const fetchStandingsData = async () => {
  //   setError(null);
  //   setLoading(true);
  //   try {
  //     const conStandings = await fetchData<
  //       ConstructorStandingsResponse,
  //       ConstructorStandingsData
  //     >(
  //       `${ConstructorStandingEndpoint.url}/${year}`,
  //       ConstructorStandingEndpoint.handler
  //     );

  //     const driStandings = await fetchData<
  //       DriverStandingsResponse,
  //       DriverStandingsData
  //     >(
  //       `${DriverStandingEndpoint.url}/${year}`,
  //       DriverStandingEndpoint.handler
  //     );

  //     if (Array.isArray(conStandings) || Array.isArray(driStandings)) {
  //       setError("Receiving invalid constructors standings.");
  //       return;
  //     }
  //     if (!constructorStandingsData) {
  //       let obj: ConstructorStandingsContextType = {};
  //       obj[conStandings.season] = conStandings.data;
  //       setConstructorStandingsData(obj);
  //     } else {
  //       let obj = constructorStandingsData;
  //       obj[conStandings.season] = conStandings.data;
  //       setConstructorStandingsData(obj);
  //     }

  //     if (!driverStandingsData) {
  //       let obj: DriverStandingsContextType = {};
  //       obj[driStandings.season] = driStandings.data;
  //       setDriverStandingsData(obj);
  //     } else {
  //       let obj = driverStandingsData;
  //       obj[driStandings.season] = driStandings.data;
  //       setDriverStandingsData(obj);
  //     }
  //   } catch (err) {
  //     setError((err as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const fetchRaceData = async () => {
  //   console.log("im coming here");
  //   setError(null);
  //   setLoading(true);
  //   try {
  //     const schedules = await fetchData<RaceScheduleType, RaceScheduleItem>(
  //       `${SeasonScheduleEndpoint.url}/${year}`,
  //       SeasonScheduleEndpoint.handler
  //     );
  //     if (!Array.isArray(schedules)) {
  //       throw new Error("Receiving invalid schedule data");
  //     }
  //     const processedSchedules: SeasonScheduleData = {
  //       season: schedules[0].season,
  //       data: schedules,
  //     };
  //     if (!seasonScheduleData) {
  //       let obj: SeasonScheduleContextType = {};
  //       obj[processedSchedules.season] = processedSchedules.data;
  //       setSeasonSchedule(obj);
  //       console.log(obj);
  //     } else {
  //       let obj = seasonScheduleData;
  //       obj[processedSchedules.season] = processedSchedules.data;
  //       setSeasonSchedule(obj);
  //     }
  //   } catch (err) {
  //     setError((err as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // console.log("im coming here");
    // setLoading(true);
    setLoading(true);
    setError(null);
    try {
      fetchConstructorStandingsData();
      fetchDriverStandingsData();
      fetchSeasonScheduleData();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
    // setLoading(false);
  }, [years]);
  // }, [years.constructorStandings, years.driverStandings, years.seasonSchedule]);

  if (
    !constructorStandingsData ||
    !driverStandingsData ||
    !seasonScheduleData
  ) {
    return <div>Error: Endpoint not accessed</div>;
  }

  return (
    <ErgastContext.Provider
      value={{
        constructorStandingsData,
        driverStandingsData,
        seasonScheduleData,
        years,
        setYears: handleYearUpdate,
        fetchConstructorStandingsData,
        fetchDriverStandingsData,
        fetchSeasonScheduleData,
        error,
        loading,
      }}
    >
      {loading ? <p>Loading...</p> : !error ? children : (error as string)}
    </ErgastContext.Provider>
  );
};

export default ErgastProvider;
