import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const configs = {
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
    this.#app = initializeApp(configs);
    this.#auth = getAuth(this.#app);
  }

  getUser() {
    return this.#auth.currentUser;
  }

  signupWithEmail(email, password) {
    console.log(
      `Should create a user account. \nEmail: ${email}\nPassword: ${password}`
    );
  }
  signinWithEmail(email, password) {
    console.log(
      `Should signin the user.\nEmail: ${email}\nPassword: ${password}`
    );
  }
}

const firebase = new Firebase();
export { firebase };
