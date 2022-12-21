import React, { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import DarkLight from "./DarkLight";
import authService from "../Service/AuthService";

function Header() {
  const { theme, setTheme } = useContext(GlobalContext);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.toLowerCase().includes('login')) {
      window.location.replace('/')
    }
  }, []);

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
      <button onClick={async () => {
        await authService.logout();
        window.location.replace('/');
      }}>Logout</button>
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
