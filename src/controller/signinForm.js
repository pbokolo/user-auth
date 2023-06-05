class SignInForm {
  initialCreds = { email: "", password: "" };
  constructor() {}

  handleSubmit(e, data, setState) {
    e.preventDefault();
    console.log(data);
    setState(this.initialCreds);
  }

  handleChange(e, creds, setState) {
    setState({ ...creds, [e.target.id]: e.target.value });
  }
}

const controller = new SignInForm();
export { controller };
