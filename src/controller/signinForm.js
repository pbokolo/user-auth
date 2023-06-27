import { firebase } from "../firebase/firebase";

class SignInForm {
  initialCreds = { todo: "signin", email: "", password: "", secondPwd: "" };
  TO_DO_SIGNIN = "signin";
  TO_DO_SIGNUP = "signup";

  constructor() {}

  handleSubmit(e, data, setState) {
    e.preventDefault();
    const { todo, email, password, secondPwd } = data;

    if (!email) {
      console.error("The email field can't be empty");
      return;
    }

    if (!password) {
      console.error("The password field can't be empty");
      return;
    }

    if (todo === this.TO_DO_SIGNUP && password !== secondPwd) {
      console.error(
        `The 2 passwords are differents: ${password} is not the same as ${secondPwd}`
      );

      return;
    }

    switch (todo) {
      case this.TO_DO_SIGNIN:
        firebase.signinWithEmail(email, password);
        break;

      case this.TO_DO_SIGNUP:
        firebase.signupWithEmail(email, password);
        break;
    }

    setState(this.initialCreds);
  }

  handleChange(e, creds, setState) {
    setState({ ...creds, [e.target.id]: e.target.value });
  }
}

const controller = new SignInForm();
export { controller };
