import React from "react";
import AppRouter from "./AppRouter";
import { AuthContextProvider } from "./Context/AuthContext";
import { ContextProvider } from "./Context/GlobalContext";
import "./App.css";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
