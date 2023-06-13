import { initializeApp } from "firebase/app";
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

  constructor() {
    this.#app = initializeApp(configs);
  }

  tellMe() {
    console.log("I love you");
  }
}

const firebase = new Firebase();
export { firebase };
