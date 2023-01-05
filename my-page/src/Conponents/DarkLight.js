import React, { useContext } from "react";
import "../darkLight.css";
import { GlobalContext } from "../Context/GlobalContext";

function DarkLight() {
  const { setTheme, theme } = useContext(GlobalContext);
  return (
    <div>
      <div className="darkLightMode">
        <div>
          <span className="switch">
            <input
              onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
              type="checkbox"
              id="switch-round"
            />
            <label htmlFor="switch-round"></label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DarkLight;
