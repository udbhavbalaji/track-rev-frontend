import { ConstructorStandingsCardItemType } from "@app-types/trackRevClient/standings/constructors";
import { useNavigate } from "react-router-dom";

interface ConstructorStandingCardItemProps {
  index: number;
  cardData: ConstructorStandingsCardItemType;
}

const ConstructorStandingCardItem = ({
  index,
  cardData,
}: ConstructorStandingCardItemProps) => {
  const navigate = useNavigate();

  const constructorNameStyling = `text-xl font-bold ${cardData.constructorId}`;

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
        <div className={constructorNameStyling}>{cardData.ConstructorName}</div>
        <div className='text-sm text-gray-400 font-wideFont'>
          {cardData.points}
        </div>
      </div>
    </li>
  );
};

export default ConstructorStandingCardItem;
