import useSeasonSchedule from "@hooks/useSeasonSchedule";
import { getRaceScheduleCard } from "@utils/format";
import RaceScheduleCardItem from "./ScheduleCardItem";

const ScheduleCard = () => {
  const schedule = useSeasonSchedule("2024");

  if (schedule.length === 0) {
    return <div>Error: Length of Season Schedule Array is 0</div>;
  }

  const cardData = schedule.map((item) => getRaceScheduleCard(item));

  return (
    <>
      <div className='container flex flex-wrap items-center justify-center mx-auto w-full rounded-lg'>
        <div className='text-white flex flex-col md:flex-row justify-start my-10 w-11/12 rounded-md'>
          <ul className='flex flex-wrap'>
            {cardData.map((item, index) => (
              <RaceScheduleCardItem key={index} index={index} cardData={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
