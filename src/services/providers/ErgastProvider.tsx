import { ErgastLoadedDataContextType } from "@app-types/trackRevClient/primitive";
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
} from "@services/api/endpoints";
import { fetchData } from "@services/api/client";
import {
  DriverStandingsContextType,
  DriverStandingsData,
} from "@app-types/trackRevClient/standings/drivers";

export const ErgastContext = createContext<ErgastLoadedDataContextType | null>(
  null
);

interface ErgastProviderProps {
  children: ReactNode;
  year: string;
}

const ErgastProvider: React.FC<ErgastProviderProps> = ({ children, year }) => {
  const [constructorStandingsData, setConstructorStandingsData] = useState<
    ConstructorStandingsContextType | undefined
  >(undefined);
  const [driverStandingsData, setDriverStandingsData] = useState<
    DriverStandingsContextType | undefined
  >(undefined);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleStandingsUpdate = () => {};

  useEffect(() => {
    console.log("Im coming here");
    const fetchStandingsData = async () => {
      setError(null);
      setLoading(true);
      try {
        const conStandings = await fetchData<
          ConstructorStandingsResponse,
          ConstructorStandingsData
        >(
          `${ConstructorStandingEndpoint.url}/${year}`,
          ConstructorStandingEndpoint.handler
        );

        const driStandings = await fetchData<
          DriverStandingsResponse,
          DriverStandingsData
        >(
          `${DriverStandingEndpoint.url}/${year}`,
          DriverStandingEndpoint.handler
        );

        if (Array.isArray(conStandings) || Array.isArray(driStandings)) {
          setError("Receiving invalid constructors standings.");
          return;
        }
        if (!constructorStandingsData) {
          let obj: ConstructorStandingsContextType = {};
          obj[conStandings.season] = conStandings.data;
          setConstructorStandingsData(obj);
        } else {
          let obj = constructorStandingsData;
          obj[conStandings.season] = conStandings.data;
          setConstructorStandingsData(obj);
        }

        if (!driverStandingsData) {
          let obj: DriverStandingsContextType = {};
          obj[driStandings.season] = driStandings.data;
          setDriverStandingsData(obj);
        } else {
          let obj = driverStandingsData;
          obj[driStandings.season] = driStandings.data;
          setDriverStandingsData(obj);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStandingsData();
  }, [year]);

  if (!constructorStandingsData || !driverStandingsData) {
    return <div>Error: Endpoint not accessed</div>;
  }

  return (
    <ErgastContext.Provider
      value={{ constructorStandingsData, driverStandingsData }}
    >
      {loading ? <p>Loading...</p> : !error ? children : (error as string)}
    </ErgastContext.Provider>
  );
};

export default ErgastProvider;
