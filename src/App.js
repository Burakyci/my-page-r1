import "./App.css";
import Header from "./Conponents/Header";
import { ContextProvider } from "./Context/GlobalContext";
import { Route, Routes, NavLink } from "react-router-dom";
import Login from "./Pages/LoginSingup/Login";
import Singup from "./Pages/LoginSingup/Singup";
import Game from "./Pages/Game";
import Weather from "./Pages/Weather";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Page404Found from "./Pages/Page404Found";
import UsersDetail from "./Pages/UsersDetail";

function App() {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Singup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Header />}>
            <Route index={true} element={<Home />} />
            <Route path="weather" element={<Weather />} />
            <Route path="game" element={<Game />} />
            <Route path="Users" element={<Users />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<Page404Found />} />
            <Route path="Users/:id" element={<UsersDetail />} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
