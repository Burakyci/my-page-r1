import React, { useContext } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import DarkLight from "./DarkLight";
import authService from "../Service/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Context/AuthContext";

import {
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const navi = useNavigate();
  const { setLoading } = useContext(AuthContext);
  const { theme, setTheme } = useContext(GlobalContext);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.toLowerCase().includes("login")) {
      window.location.replace("/");
    }
  }, []);

  return (
    <div className={theme}>
      <div className="socialMedia">
        <div className="icons">
          <a href="https://www.linkedin.com/in/burak-kalayc%C4%B1-7427ba1b7/">
            <FontAwesomeIcon className="icon linkedin" icon={faLinkedin} />
          </a>
        </div>
        <div className="icons">
          <a href="https://github.com/Burakyci">
            <FontAwesomeIcon className="icon github" icon={faGithub} />
          </a>
        </div>
        <div className="icons">
          <a href="#">
            <FontAwesomeIcon className="icon twitter" icon={faTwitter} />
          </a>
        </div>
      </div>
      {/* <button onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}>
        <p>{theme}</p>
      </button> */}
      <DarkLight />
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/game">
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
      <NavLink className="link" to="profil">
        Profil
      </NavLink>

      <NavLink className="link" to={-1}>
        Back
      </NavLink>
      <button
        onClick={async () => {
          await authService.logout();

          navi("/");
        }}
      >
        Logout
      </button>
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
