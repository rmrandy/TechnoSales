import React from "react";
import Facebook from "../assets/icons/Face.png"
import Google from "../assets/icons/Google.png"
import LinkedIn from "../assets/icons/Linked.png"
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Iniciar Sesión </h1>
        <div className="social-container">
          <a href="facebook.com" className="social">
          <img src={Facebook} alt="Facebook" />
          </a>
          <a href="google.com" className="social">
          <img src={Google} alt="Google" />
          </a>
          <a href="linkedin.com" className="social">
          <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <span>También puedes iniciar sesión con tu cuenta  de correo electrónico</span>
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={state.password}
          onChange={handleChange}
        />
        <a href="gmail.com">¿Olvidaste tu contraseña?</a>
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default SignInForm;
