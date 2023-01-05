import { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../Service/AuthService";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { fireAuth } from "../ApiConfig/FirebaseConfig";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(fireAuth.currentUser);

  const [loading, setLoading] = useState(false);

  const [loginState, setLoginState] = useState({
    isLogin: false,
    loginEmail: "deneme4@deneme.com",
    loginPassword: "123456",
  });

  const [singupState, setSingupState] = useState({
    isSingup: false,
    loginEmail: "",
    singupPassword: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const data = {
    user,
    setUser,
    AuthService,
    setLoading,
    loading,
    loginState,
    setLoginState,
    singupState,
    setSingupState,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};
