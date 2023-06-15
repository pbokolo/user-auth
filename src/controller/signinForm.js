class SignInForm {
  initialCreds = { email: "", password: "", secondPwd: "" };
  constructor() {}

  handleSubmit(e, data, type, setState) {
    e.preventDefault();

    if (type === "signup" && data.password !== data.secondPwd) {
      console.error(
        `The 2 passwords are differents: ${data.password} is not the same as ${data.secondPwd}`
      );

      return;
    }
    console.log(type, data);
    setState(this.initialCreds);
  }

  handleChange(e, creds, setState) {
    setState({ ...creds, [e.target.id]: e.target.value });
  }
}

const controller = new SignInForm();
export { controller };
