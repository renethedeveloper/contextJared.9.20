import { createContext, useContext, useState } from "react";

// Create context itself. This is what components will import.
export const primaryContext = createContext();

// Create Provider. This is what will surround the app.
const PrimaryProvider = (props) => {
  // 1. Create our state that the app will need
  const [user, setUser] = useState({
    name: "Jared",
    email: "Jarred@gmail.com",
  });
  const [activities, setActivities] = useState([
    "basketball",
    "running",
    "poker",
  ]);

  // 2. Return the Actual provider of the context
  return (
    <primaryContext.Provider
      value={{
        user: user,
        setUser: setUser,
        activities: activities,
        setActivities: setActivities,
      }}
    >
      {props.children} {/* Render the children components */}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
