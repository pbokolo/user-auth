import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updateProfile,
} from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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
  #storage;
  constructor() {
    this.#app = initializeApp(firebaseConfig);
    this.#auth = getAuth(this.#app);
    this.#storage = getStorage(this.#app);
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

  async signOutUser() {
    return signOut(this.#auth);
  }

  async deleteUserAccount() {
    return deleteUser(this.#auth.currentUser);
  }

  uploadProfilePicture(file) {
    const storageRef = ref(
      this.#storage,
      `pictures/${this.getCurrentUser().uid}`
    );
    return uploadBytesResumable(storageRef, file);
  }

  async getDownloadableURL(uploadTask) {
    return getDownloadURL(uploadTask.snapshot.ref);
  }

  async updateUserProfilePictureUrl(url) {
    return updateProfile(this.#auth.currentUser, { photoURL: url });
  }

  async updateUsername(username) {
    return updateProfile(this.#auth.currentUser, { displayName: username });
  }
}

const firebase = new Firebase();

export { firebase };
