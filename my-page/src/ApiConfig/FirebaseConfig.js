import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANvXoicbFEXoabPMNjrvPeqX-HsehstQ4",
  authDomain: "my-page-3a601.firebaseapp.com",
  projectId: "my-page-3a601",
  storageBucket: "my-page-3a601.appspot.com",
  messagingSenderId: "776295645680",
  appId: "1:776295645680:web:f0635389c8a7fdfa759d35",
};

const app = initializeApp(firebaseConfig);

export const fireAuth = getAuth();

export default app;
