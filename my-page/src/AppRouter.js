import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthContext } from './Context/AuthContext';
import { BrowserRouter } from "react-router-dom";
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
import Loading from "./Pages/Loading";
import AuthLayout from "./Pages/AuthLayout";
import MyPage from "./Pages/Profil/MyPage";
import UpdateProfil from "./Pages/Profil/UpdateProfil";
import ProfilDashboard from "./Pages/Profil/ProfilDashboard";


export default function AppRouter() {
  const { user, loading, setLoading } = React.useContext(AuthContext);
  return (
    <BrowserRouter>
      {
        loading == true ? (
          <Routes>
            <Route path="/" element={<Loading />} />
          </Routes>
        ) : (
          <Routes>
            {
              user === null ? (
                <Route path="/" element={<AuthLayout />}>
                  <Route index={true} element={<Login />} />
                  <Route path="signup" element={<Singup />} />
                </Route>
              ) : (
                <Route path="/" element={<Header />}>
                  <Route index={true} element={<Home />} />
                  <Route path="weather" element={<Weather />} />
                  <Route path="game" element={<Game />} />
                  <Route path="Users" element={<Users />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="loading" element={<Loading />} />
                  <Route path="Users/:id" element={<UsersDetail />} />
                  <Route path="*" element={<Page404Found />} />
                  <Route path="profil" element={<ProfilDashboard />}>
                    <Route index={true} element={<MyPage />} />
                    <Route path="UpdateProfil" element={<UpdateProfil />} />
                  </Route>
                </Route>
              )}
          </Routes>
        )}
    </BrowserRouter>
  )
}