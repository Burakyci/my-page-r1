import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";


function Loading() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={theme}>
      <div className={'center'}>
        <h1>Loading....</h1>
      </div>
    </div>
  );
}

export default Loading;
