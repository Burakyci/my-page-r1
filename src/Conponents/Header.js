import React, { useContext } from "react";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";

import Home from "../Pages/Home";
import Game from "../Pages/Game";
import Weather from "../Pages/Weather";
import Users from "../Pages/Users";
import { GlobalContext } from "../Context/GlobalContext";
import DarkLight from "./DarkLight";
import Page404Found from "../Pages/Page404Found";
import UsersDetail from "../Pages/UsersDetail";
import Contact from "../Pages/Contact";

function Header() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div className={theme}>
      {/* <button onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}>
        <p>{theme}</p>
      </button> */}
      <DarkLight />
      <NavLink className="link" to="/Home">
        Home
      </NavLink>
      <NavLink className="link" to="/Home/game">
        Game
      </NavLink>
      <NavLink className="link" to="Weather">
        Weather
      </NavLink>
      <NavLink className="link" to="Users">
        Users
      </NavLink>
      <NavLink className="link" to="Contact">
        Contact
      </NavLink>

      <NavLink className="link" to={-1}>
        Back
      </NavLink>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Users/:id" element={<UsersDetail />} />
        <Route path="*" element={<Page404Found />} />
      </Routes> */}
      <Outlet />
    </div>
  );
}

export default Header;
