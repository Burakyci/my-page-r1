import "./LoginSingup.css";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { AuthContext } from "../../Context/AuthContext";

function SingUp() {
  const { singupState, setSingupState, AuthService } = useContext(AuthContext);
  const { isSingup, singupEmail, singupPassword } = singupState;

  const handleSubmitSingup = async (e) => {
    e.preventDefault();
    setSingupState((prev) => ({
      ...prev,
      isSingup: false,
    }));
    const user = await AuthService.register(singupEmail, singupPassword);
    setSingupState((prev) => ({
      ...prev,
      isSingup: true,
    }));
    console.log(isSingup);
  };

  return (
    <motion.div
      className="loginSingupContainer m-7"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <div className="loginContainer">
        <div className="singUp bg-none">
          <div className="bg-none">
            <h1 className="bg-none m-7">Singup page</h1>
          </div>
          <form className="bg-none" onSubmit={handleSubmitSingup}>
            <div className="bg-none">
              <input
                className="bg-none m-7"
                placeholder="E-mail"
                type="email"
                id="mailSingup"
                value={singupEmail}
                onChange={(e) => {
                  setSingupState((prev) => ({
                    ...prev,
                    singupEmail: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="bg-none">
              <input
                className="bg-none m-7"
                placeholder="Password"
                type="password"
                id="passwordSingup"
                value={singupPassword}
                onChange={(e) => {
                  setSingupState((prev) => ({
                    ...prev,
                    singupPassword: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="bg-none">
              <button className="loginButton bg-none m-7" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
        <NavLink className="bg-none" to="/">
          <p className="bg-none">Login</p>
        </NavLink>
      </div>
    </motion.div>
  );
}

export default SingUp;

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
