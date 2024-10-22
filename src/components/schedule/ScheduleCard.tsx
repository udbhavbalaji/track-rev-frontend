import useSeasonSchedule from "@hooks/useSeasonSchedule";
import { getRaceScheduleCard } from "@utils/format";
import RaceScheduleCardItem from "./ScheduleCardItem";
import DropDown from "@components/ui/DropDown";
import useErgast from "@hooks/useErgast";
import { useEffect } from "react";

const ScheduleCard = () => {
  const { years, setYears, error, loading } = useErgast();

  // console.log(years);
  const schedule = useSeasonSchedule(years.seasonSchedule);

  if (!schedule) {
    return <div>Error: Data doesn't exist for {years.seasonSchedule}</div>;
  }

  if (schedule.length === 0) {
    return <div>Error: Length of Season Schedule Array is 0</div>;
  }

  const cardData = schedule.map((item) => getRaceScheduleCard(item));

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>(error as string)</p>
      ) : (
        <div className='container flex flex-wrap items-center justify-center mx-auto w-full rounded-lg'>
          <DropDown
            reqType='seasonSchedule'
            options={["2024", "2023", "2022"]}
            currentValue={years.seasonSchedule}
            onYearChange={setYears}
          />
          <div className='text-white flex flex-col md:flex-row justify-start my-10 w-11/12 rounded-md'>
            <ul className='flex flex-wrap'>
              {cardData.map((item, index) => (
                <RaceScheduleCardItem
                  key={index}
                  index={index}
                  cardData={item}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleCard;
