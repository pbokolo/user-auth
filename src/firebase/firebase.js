import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo1gYRg9no4rTIRuAcuttyU6yPe4gL3ms",
  authDomain: "auth-fb-f5a08.firebaseapp.com",
  projectId: "auth-fb-f5a08",
  storageBucket: "auth-fb-f5a08.appspot.com",
  messagingSenderId: "670209369874",
  appId: "1:670209369874:web:33dffe9240e88fb0cff5cb",
};

class Firebase {
  #app;
  #auth;
  constructor() {
    this.#app = initializeApp(firebaseConfig);
    this.#auth = getAuth(this.#app);
  }

  getAuth() {
    return this.#auth;
  }

  getCurrentUser() {
    return this.#auth.currentUser;
  }

  async signupWithEmailAndPwd({ email, password }) {
    return createUserWithEmailAndPassword(this.#auth, email, password);
  }

  async siginWithEmailAndPwd({ email, password }) {
    return signInWithEmailAndPassword(this.#auth, email, password);
  }
}

const firebase = new Firebase();

export { firebase };
