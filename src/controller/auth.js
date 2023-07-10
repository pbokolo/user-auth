import { firebase } from "../firebase/firebase";

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

  async handleFormSubmit(e, data, setData, setErrors) {
    e.preventDefault();
    // Check data
    if (!this.#checkData(data, setErrors)) return;
    // Clears previous errors
    setErrors(this.errors);
    // Reinits data
    setData(this.initData);
    //Proceeds to authentication
    this.#handleAuthentication(data);
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

  async #handleAuthentication(data) {
    switch (data.type) {
      case this.TYPE_SIGN_IN:
        try {
          const response = await firebase.siginWithEmailAndPwd(data);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        break;

      case this.TYPE_SIGN_UP:
        try {
          const response = await firebase.signupWithEmailAndPwd(data);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        break;
    }
  }
}

const authController = new Controller();
export { authController };
