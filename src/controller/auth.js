class Controller {
  TYPE_SIGN_IN = "signin";
  TYPE_SIGN_UP = "signup";
  initData;
  constructor() {
    this.initData = { email: "", password: "", secondPassword: "" };
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

  handleFormSubmit(e, data, setData) {
    e.preventDefault();
    setData(this.initData);
    console.log(data);
  }
}

const authController = new Controller();
export { authController };
