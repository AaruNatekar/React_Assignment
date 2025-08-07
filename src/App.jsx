import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import VisitorPage from "./Pages/VisitorPage";
import EventPage from "./Pages/EventPage";
import { EventProvider } from "./Contexts/EventContext";

function App() {
  const [visitorName, setVisitorName] = useState([]);
  const [welcomeName, setWelcomeName] = useState("");
  const [eventName, setEventName] = useState("");
  const [OrganizerName, setOrganizerName] = useState("");

  function handleCheckIn(e) {
    if (e.trim !== "") {
      setVisitorName([...visitorName, e]);
      setWelcomeName(e);
    }
  }

  function handleEventInfo(e, o) {
    if (e.trim && o.trim) {
      setEventName(e);
      setOrganizerName(o);
    }
  }

  function handleDeleteEvent(){
    setEventName("")
    setOrganizerName("");
  }

  return (
    <EventProvider
      value={{
        eventName,
        OrganizerName,
        setEventName,
        setOrganizerName,
        handleEventInfo,
        handleDeleteEvent,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <VisitorPage
                visitorName={visitorName}
                welcomeName={welcomeName}
                handleCheckIn={handleCheckIn}
              />
            }
          />
          <Route
            path="/EventPage"
            element={
              <EventPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}

export default App;
