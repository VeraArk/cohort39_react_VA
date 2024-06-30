import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  const inputEmail = {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  };

  const inputPassword = {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  };

  const buttonLogin = {
    name: "Login",
    type: "button",
  };

  return (
    <form className="loginForm-component">
      <div className="formName">Login form</div>
      <Input
        name={inputEmail.name}
        type={inputEmail.type}
        placeholder={inputEmail.placeholder}
        label={inputEmail.label}
      />
      <Input
        name={inputPassword.name}
        type={inputPassword.type}
        placeholder={inputPassword.placeholder}
        label={inputPassword.label}
      />
      <Button name={buttonLogin.name} type={buttonLogin.type} />
    </form>
  );
}
export default LoginForm;
