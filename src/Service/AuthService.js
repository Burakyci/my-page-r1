import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { fireAuth } from '../ApiConfig/FirebaseConfig';

export class AuthService {
  register = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
      return user;
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(fireAuth, email, password);
      return user;
    } catch (error) {
      alert(error.message);
      console.log(error);
      console.log(typeof error);
    }
  };

  logout = async () => {
    try {
      await signOut(fireAuth);
      return true;
    } catch (error) { }
  };
}

export default new AuthService();