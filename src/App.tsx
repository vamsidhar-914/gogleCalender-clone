import { Calender } from "./components/Calender";
import { EventsProvider } from "./context/Events";

function App() {
  return (
    <EventsProvider>
      <Calender />;
    </EventsProvider>
  );
}

export default App;
