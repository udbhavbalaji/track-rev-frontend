import { RequestTypes } from "@app-types/trackRevClient/primitive";
import AppLayout from "@components/AppLayout";
import ScheduleCard from "@components/schedule/ScheduleCard";

type SchedulePageProps = {
  reqType: RequestTypes;
};

const SchedulePage: React.FC<SchedulePageProps> = ({ reqType }) => {
  if (reqType !== RequestTypes.SeasonSchedule) {
    throw new Error("Invalid Request Type Received");
  }

  const title = "Season Schedule";

  return (
    <AppLayout title={title}>
      <ScheduleCard />
    </AppLayout>
  );
};

export default SchedulePage;
