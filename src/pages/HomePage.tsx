import AppLayout from "@components/AppLayout";
import { ErgastContext } from "@services/providers/ErgastProvider";
import { useContext } from "react";

const HomePage: React.FC<{
  fn: (year: string) => void;
}> = ({ fn }) => {
  const { constructorStandingsData } = useContext(ErgastContext)!;

  console.log(constructorStandingsData);

  fn("2023");

  return <AppLayout title='Home Page'></AppLayout>;
};

export default HomePage;
