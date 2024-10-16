import useErgast from "@hooks/useErgast";

const useConstructorStandings = (year: string) => {
  const { constructorStandingsData } = useErgast();

  return constructorStandingsData[year];
};

export default useConstructorStandings;
