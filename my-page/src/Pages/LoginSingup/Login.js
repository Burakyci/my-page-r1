import React, { useContext } from "react";
import "./LoginSingup.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { loginState, setLoginState, AuthService } = useContext(AuthContext);
  const { isLogin, loginEmail, loginPassword } = loginState;
  const a = AuthService.verification();
  console.log(a);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoginState((prev) => ({
      ...prev,
      isLogin: false,
    }));
    const user = await AuthService.login(loginEmail, loginPassword);
    setLoginState((prev) => ({
      ...prev,
      isLogin: true,
    }));
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
                    loginPassword: e.target.value,
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
          <NavLink className="bg-none" to="signup">
            <p className="bg-none">Back</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
