import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { fireAuth } from "../ApiConfig/FirebaseConfig";

export class AuthService {
  register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
    } catch (error) {
      alert(error.message);
    }
  };

  logout = async () => {
    try {
      await signOut(fireAuth);
      return true;
    } catch (error) { }
  };

  verification = async () => {
    try {
      await sendEmailVerification(fireAuth.currentUser);
    } catch (error) {
      console.log(error, "hata");
    }
  };

  updateProfil = async (
    name,
    photo = "https://i.pinimg.com/originals/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg"
  ) => {
    try {
      updateProfile(fireAuth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default new AuthService();
