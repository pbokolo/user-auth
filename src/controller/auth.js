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

  handleAuthTypeChange(authType, setAuthType) {
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
  }

  handleFormSubmit(e, data, setData, setErrors) {
    e.preventDefault();
    if (!this.#checkData(data, setErrors)) return;
    setErrors(this.errors);
    setData(this.initData);
    console.log(data);
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
}

const authController = new Controller();
export { authController };
