import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [theme, setTheme] = useState("Dark");

  const [weatherState, setWeatherState] = useState({
    loading: false,
    error: null,
    city: null,
    data: null,
  });

  const [weatherConp, setWeatherConp] = useState({
    lon: 2,
    lot: null,
    data: null,
    error: null,
    loading: null,
  });

  const [gameState, setGameState] = useState({
    userChoose: null,
    pcChoose: null,
    userAlt: null,
  });

  const [users, setUsers] = useState([]);

  const data = {
    theme,
    setTheme,

    gameState,
    setGameState,

    weatherState,
    setWeatherState,

    users,
    setUsers,

    weatherConp,
    setWeatherConp,
  };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
