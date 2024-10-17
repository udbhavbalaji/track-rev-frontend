import { RequestTypes } from "@app-types/trackRevClient/primitive";
import HomePage from "@pages/HomePage";
import SchedulePage from "@pages/SchedulePage";
import StandingsPage from "@pages/Standings";
import ErgastProvider from "@services/providers/ErgastProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// const queryClient = new QueryClient();

function App() {
  const [year, setYear] = useState("2024");

  const handleYearUpdate = (year: string) => {
    setYear(year);
  };

  return (
    <>
      <ErgastProvider year={year}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/constructors/standings'
              element={
                <StandingsPage reqType={RequestTypes.ConstructorStandings} />
              }
            />
            <Route
              path='/drivers/standings'
              element={<StandingsPage reqType={RequestTypes.DriverStandings} />}
            />
            <Route
              path='/races/schedule'
              element={<SchedulePage reqType={RequestTypes.SeasonSchedule} />}
            />
            <Route path='/*' element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      </ErgastProvider>

      {/* <QueryClientProvider client={queryClient}>
        <></>
      </QueryClientProvider> */}
    </>
  );
}

export default App;
