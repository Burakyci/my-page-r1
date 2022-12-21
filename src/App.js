import * as  React from "react";
import { ContextProvider } from "./Context/GlobalContext";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import "./App.css";
import Header from "./Conponents/Header";
import Login from "./Pages/LoginSingup/Login";
import Singup from "./Pages/LoginSingup/Singup";
import Game from "./Pages/Game";
import Weather from "./Pages/Weather";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Page404Found from "./Pages/Page404Found";
import UsersDetail from "./Pages/UsersDetail";
import Loading from './Pages/Loading';
import AuthLayout from './Pages/AuthLayout';
import { fireAuth } from "./ApiConfig/FirebaseConfig";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [authError, setAuthSettor] = React.useState(null);

  React.useEffect(() => {
    const authStateUnSub = onAuthStateChanged(fireAuth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      (err) => {
        console.log(err)
      });

    return () => { //unmount
      if (authStateUnSub) {
        authStateUnSub();
      }
    };
  }, []);

  return (
    <div>
      <ContextProvider>
        <Routes>
          {
            (loading) ? (
              <Route path="/loading" element={<Loading />} />
            ) : (
              currentUser === null ? (
                <Route path="/" element={<AuthLayout />}>
                  <Route index={true} element={<Login />} />
                  <Route path="/signup" element={<Singup />} />
                </Route>
              ) : (
                <>
                  <Route path="/" element={<Header />}>
                    <Route index={true} element={<Home />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="game" element={<Game />} />
                    <Route path="Users" element={<Users />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Users/:id" element={<UsersDetail />} />
                    <Route path="*" element={<Page404Found />} />
                  </Route>
                </>
              )
            )
          }
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
