import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faFacebook,
//   faLinkedin,
//   faGithub,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

import WeatherConp from "../Conponents/WeatherConp";
import { fireAuth } from "../ApiConfig/FirebaseConfig";
import Loading from "./Loading";

function Home() {
  React.useEffect(() => {
    if (!fireAuth.currentUser) {
      window.location.replace("/login");
    }
  }, [fireAuth.currentUser]);

  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={theme}>
      <div className="socialMedia">
        {/* <div className="icons">
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
        </div> */}

        <WeatherConp />
      </div>
    </div>
  );
}

export default Home;
