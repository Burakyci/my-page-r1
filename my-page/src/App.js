import React from "react";
import AppRouter from "./AppRouter";
import { AuthContextProvider } from "./Context/AuthContext";
import { ContextProvider } from "./Context/GlobalContext";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div>
      {/* <AuthContextProvider> */}
      <Provider store={store}>
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </Provider>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
