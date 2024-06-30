import "./styles.css";

function Input({name, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label for = {name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} className="input-component" />
    </div>
  );
}

export default Input;
