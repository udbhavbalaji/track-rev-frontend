import useErgast from "@hooks/useErgast";

const useDriverStandings = (year: string) => {
  const { driverStandingsData } = useErgast();

  return driverStandingsData[year];
};

export default useDriverStandings;
