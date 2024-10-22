import useErgast from "./useErgast";

const useSeasonSchedule = (year: string) => {
  const { seasonScheduleData } = useErgast();

  return seasonScheduleData[year];
};

export default useSeasonSchedule;
