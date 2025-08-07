import { createContext, useContext } from "react";

const EventContext = createContext();

export function EventProvider({ children, value }) {
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}

export function useEvent() {
  return useContext(EventContext);
}
