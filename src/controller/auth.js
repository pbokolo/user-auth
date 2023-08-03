import { firebase } from "../firebase/firebase";
import { authErrors } from "../helpers/errors";

class Controller {
  TYPE_SIGN_IN = "signin";
  TYPE_SIGN_UP = "signup";
  initData;
  errors;
  constructor() {
    this.initData = {
      email: "",
      password: "",
      secondPassword: "",
    };

    this.errors = { email: "", password: "", secondPassword: "" };
  }

  handleAuthTypeChange(authType, setAuthType, errorSetter) {
    let newAuthType = "";
    switch (authType) {
      case this.TYPE_SIGN_IN:
        newAuthType = this.TYPE_SIGN_UP;
        break;
      case this.TYPE_SIGN_UP:
        newAuthType = this.TYPE_SIGN_IN;
        break;
    }
    setAuthType(newAuthType);
    errorSetter(this.errors);
  }

  async handleFormSubmit(e, data, setData, setErrors, setEditable) {
    e.preventDefault();
    // Check data
    if (!this.#checkData(data, setErrors)) return;
    setEditable(false);
    //Proceeds to authentication
    this.#handleAuthentication(data, setData, setErrors, setEditable);
    // Clears previous errors
    setErrors(this.errors);
  }

  async handleProfilePictureSubmit(file, setProfilePictureUrl) {
    setProfilePictureUrl(URL.createObjectURL(file));
    const uploadTask = firebase.uploadProfilePicture(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        firebase.getDownloadableURL(uploadTask).then((downloadURL) => {
          setProfilePictureUrl(downloadURL);
          firebase.updateUserProfilePictureUrl(downloadURL);
        });
      }
    );
  }

  async handleUsernameUpdate(username, user, setUsername) {
    try {
      await firebase.updateUsername(username);
      setUsername(user.displayName);
    } catch (error) {
      console.log(error);
    }
  }

  async handlePhoneNumberUpdate() {
    /* try {
      const result = await firebase.updatePhoneNumber("0998444102");
      console.log(result);
    } catch (error) {
      console.log(error);
    } */
    console.log("Should edit phone number");
  }

  #checkData(data, setErrors) {
    if (!data.email) {
      setErrors({ ...this.errors, email: "Fill the email field please" });
      return;
    }
    if (!data.password) {
      setErrors({ ...this.errors, password: "Fill the password field please" });

      return;
    }

    if (data.type === this.TYPE_SIGN_UP && !data.secondPassword) {
      setErrors({
        ...this.errors,
        secondPassword: "Fill the second password field please",
      });
      return;
    }

    if (data.type === this.TYPE_SIGN_UP && data.password.length < 6) {
      setErrors({ ...this.errors, password: "The password length is short" });
      return;
    }
    if (data.type === this.TYPE_SIGN_UP && data.secondPassword.length < 6) {
      setErrors({
        ...this.errors,
        secondPassword: "The second password length is short",
      });
      return;
    }

    if (
      data.type === this.TYPE_SIGN_UP &&
      data.password !== data.secondPassword
    ) {
      setErrors({
        ...this.errors,
        password: "The two passwords are different",
        secondPassword: "The two passwords are different",
      });
      return;
    }
    return true;
  }

  async #handleAuthentication(data, setData, setErrors, setEditable) {
    try {
      switch (data.type) {
        case this.TYPE_SIGN_IN:
          await firebase.siginWithEmailAndPwd(data);
          // Reinits data
          setData(this.initData);
          break;
        case this.TYPE_SIGN_UP:
          await firebase.signupWithEmailAndPwd(data);
          // Reinits data
          setData(this.initData);
          break;
      }
    } catch (err) {
      setEditable(true);
      const error = { err };
      const { code } = error.err;

      switch (code) {
        case "auth/user-not-found":
          setErrors({ ...this.errors, email: authErrors[code] });
          break;

        case "auth/wrong-password":
          setErrors({ ...this.errors, password: authErrors[code] });
          break;
        case "auth/email-already-in-use":
          setErrors({ ...this.errors, email: authErrors[code] });
      }
    }
  }

  async handleSignout() {
    const res = await firebase.signOutUser();
    console.log(res);
  }

  async handleDeleteAccount() {
    const res = await firebase.deleteUserAccount();
    console.log(res);
  }
}

const authController = new Controller();
export { authController };
