import { RequestTypes } from "@app-types/trackRevClient/primitive";
import AppLayout from "@components/AppLayout";
import ConstructorStandingsCard from "@components/standings/ConstructorStandingsCard";
import DriverStandingsCard from "@components/standings/DriverStandingsCard";

type StandingsPageProps = {
  reqType: RequestTypes;
};

const StandingsPage = ({ reqType }: StandingsPageProps) => {
  if (
    reqType !== RequestTypes.ConstructorStandings &&
    reqType !== RequestTypes.DriverStandings
  ) {
    throw new Error("Invalid request type");
  }
  const title =
    reqType === RequestTypes.ConstructorStandings
      ? "Constructor's Standings"
      : "Driver's Standings";

  return (
    <AppLayout title={title}>
      {reqType === RequestTypes.ConstructorStandings ? (
        <ConstructorStandingsCard />
      ) : (
        <DriverStandingsCard />
      )}
    </AppLayout>
  );
};

export default StandingsPage;
