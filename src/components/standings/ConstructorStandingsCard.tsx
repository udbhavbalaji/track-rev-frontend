import useConstructorStandings from "@hooks/useConstructorStandings";
import { getConstructorStandingCard } from "@utils/format";
import ConstructorStandingCardItem from "@components/standings/ConstructorStandingCardItem";

const ConstructorStandingsCard = () => {
  const standingsItems = useConstructorStandings("2024");

  if (standingsItems.length === 0) {
    return <div>Error: Length of Constructor's Array is 0</div>;
  }

  const cardData = standingsItems.map((item) =>
    getConstructorStandingCard(item)
  );

  return (
    <>
      <div className='container flex flex-wrap items-center justify-center mx-auto w-full rounded-lg'>
        <div className='text-white flex flex-col md:flex-row justify-start my-10 w-11/12 rounded-md'>
          <ul className='flex flex-wrap'>
            {cardData.map((item, index) => (
              <ConstructorStandingCardItem
                key={index}
                index={index}
                cardData={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ConstructorStandingsCard;
