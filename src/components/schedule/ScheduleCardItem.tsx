import { RaceScheduleCardItemType } from "@app-types/trackRevClient/schedule";

interface ScheduleCardItemProps {
  index: number;
  cardData: RaceScheduleCardItemType;
}

const RaceScheduleCardItem: React.FC<ScheduleCardItemProps> = ({
  index,
  cardData,
}) => {
  let weekendSchedule: string;
  if (cardData.startMonth === cardData.endMonth) {
    weekendSchedule = `${cardData.startDate} - ${
      cardData.endDate
    } ${cardData.endMonth.slice(0, 3)}`;
  } else {
    weekendSchedule = `${cardData.startDate} ${cardData.startMonth.slice(
      0,
      3
    )} - ${cardData.endDate} ${cardData.endMonth.slice(0, 3)}`;
  }

  return (
    <li
      key={index}
      className='w-8/12 flex py-4 items-center justify-center mx-auto rounded-xl'
    >
      <div
        className={`flex flex-col gap p-4 w-full rounded-md shadow-lg cursor-pointer ${
          index % 2 === 0 ? "even" : "odd"
        }-card`}
        // onClick={() => handleCardClick(cardData.season, cardData.raceName)}
      >
        <p className='text-sm text-red-600 font-semibold'>{`Round ${
          index + 1
        }`}</p>
        <div className='text-xl font-bold text-white'>{cardData.raceName}</div>
        <div className='text-sm text-gray-400 font-wideFont'>
          {cardData.circuitName}
        </div>
        <p className='text-xs text-gray-500'>{weekendSchedule}</p>
      </div>
    </li>
  );
};

export default RaceScheduleCardItem;
