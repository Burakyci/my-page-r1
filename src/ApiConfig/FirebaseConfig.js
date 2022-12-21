import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANvXoicbFEXoabPMNjrvPeqX-HsehstQ4",
  authDomain: "my-page-3a601.firebaseapp.com",
  projectId: "my-page-3a601",
  storageBucket: "my-page-3a601.appspot.com",
  messagingSenderId: "776295645680",
  appId: "1:776295645680:web:f0635389c8a7fdfa759d35",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const Register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert(error.message);
    console.log(error);
    console.log(typeof error);
  }
};

export const Logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {}
};

export default app;
