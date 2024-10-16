import useDriverStandings from "@hooks/useDriverStandings";
import DriverStandingCardItem from "@components/standings/DriverStandingsCardItem";
import { getDriverStandingCard } from "@utils/format";

const DriverStandingsCard = () => {
  const standingsItems = useDriverStandings("2024");

  if (standingsItems.length === 0) {
    return <div>Error: Length of Driver's Array is 0</div>;
  }

  const cardData = standingsItems.map((item) => getDriverStandingCard(item));

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto w-full rounded-lg'>
      <div className='text-white flex flex-col md:flex-row justify-start my-10 w-11/12 rounded-md'>
        <ul className='flex flex-wrap'>
          {cardData.map((item, index) => (
            <DriverStandingCardItem key={index} index={index} cardData={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverStandingsCard;
