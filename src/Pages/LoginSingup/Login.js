import React, { useContext } from "react";
import "./LoginSingup.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Login } from "../../ApiConfig/FirebaseConfig";
import { GlobalContext } from "../../Context/GlobalContext";

function LoginSingUp() {
  const { loginState, setLoginState } = useContext(GlobalContext);
  const { isLogin, loginEmail, loginPassword } = loginState;

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = await Login(loginEmail, loginPassword);
    console.log(user);
  };

  return (
    <div className="loginSingupContainer m-7">
      <div className="loginContainer">
        <div className="login bg-none">
          <div className="bg-none">
            <h1 className="bg-none m-7">login page</h1>
          </div>
          <form className="bg-none" onSubmit={handleSubmitLogin}>
            <div className="bg-none">
              <input
                className="bg-none m-7"
                placeholder="E-mail"
                type="email"
                id="mailLogin"
                value={loginEmail}
                onChange={(e) => {
                  setLoginState((prev) => ({
                    ...prev,
                    loginEmail: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="bg-none">
              <input
                className="bg-none m-7"
                placeholder="Password"
                type="password"
                id="passwordLogin"
                value={loginPassword}
                onChange={(e) => {
                  setLoginState((prev) => ({
                    ...prev,
                    loginEmail: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="bg-none">
              <button className="loginButton bg-none m-7" type="submit">
                Log-in
              </button>
            </div>
          </form>
          <NavLink className="bg-none" to={-1}>
            <p className="bg-none">Back</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginSingUp;

{
  /* <NavLink
className="link"
to="Home"
onClick={() => {
  setIsOpen(isOpen === "open" ? "closed" : "open");
  setIsClosed(isOpen === "closed" ? "open" : "closed");
  setLoginSingup(loginSingup === true ? false : true);
}}
>
{loginSingup === true ? <p>Login</p> : <p>Singup</p>}
</NavLink> */
}
