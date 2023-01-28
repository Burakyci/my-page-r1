import { actionTypes } from "./actions";
import { combineReducers } from "redux";

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const initialSettingsState = {
  theme: "light",
  layout: "vertical",
  sidebarCollapsed: false,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTH:
      return {
        ...state,
        user: action.payload,//user
        isAuthenticated: action.payload !== null,
        loading: false,
      };
    default:
      return state;
  }
};

const settingsReducer = (state = initialSettingsState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export default rootReducer;