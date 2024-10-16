import { DriverStandingsCardItemType } from "@app-types/trackRevClient/standings/drivers";
import { useNavigate } from "react-router-dom";

interface DriverStandingCardItemProps {
  index: number;
  cardData: DriverStandingsCardItemType;
}

const DriverStandingCardItem = ({
  index,
  cardData,
}: DriverStandingCardItemProps) => {
  const navigate = useNavigate();

  const driverNameStyling = `text-xl font-bold ${cardData.constructorId}`;
  // fix: Need to implement this function after deciding routes and stuff
  const handleCardClick = () => {
    navigate("");
  };

  return (
    <li
      key={index}
      className='w-8/12 flex py-4 items-center justify-center mx-auto rounded-xl'
    >
      <div
        className={`flex flex-col gap p-4 w-full rounded-md shadow-lg cursor-pointer ${
          index % 2 === 0 ? "even" : "odd"
        }-card`}
        onClick={() => handleCardClick()}
      >
        <p className='text-sm text-red-600 font-semibold'>
          {cardData.position}
        </p>
        <div className={driverNameStyling}>{cardData.driverName}</div>
        <div className='text-sm text-gray-400 font-wideFont'>
          {cardData.points}
        </div>
        <p className='text-xs text-gray-500'>{cardData.driverNumber}</p>
      </div>
    </li>
  );
};

export default DriverStandingCardItem;
