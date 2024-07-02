import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {

  const inputPassword = {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  };

  const clickOnme =()=>{
   console.log("Works")
  }

  {/*const clickOnMe2 = (event, someAttr) => {
    console.log(event)
    console.log(someAttr);
    console.log("Trigger on button works, button is clicked");
  };*/}

  const buttonLogin = {
    name: "Login",
    type: "button",
  };

  return (
    <form className="loginForm-component">
      <div className="formName">Login form</div>
      <Input
       id="idEmail"
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Input
        id="idPassword"
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Button name={buttonLogin.name} type={buttonLogin.type} />
      {/*<button onClick={clickOnme} name ="Click me" type="button"></button> 
       <button onClick={(event) => clickOnMe(event, "Some message")} className="button-click" type="button">Click me!!!</button> */}
    </form>
  );
}
export default LoginForm;
