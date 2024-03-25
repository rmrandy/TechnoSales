import React from "react";
import Facebook from "./assets/icons/Face.png"
import Google from "./assets/icons/Google.png"
import LinkedIn from "./assets/icons/Linked.png"
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crear Cuenta</h1>
        <div className="social-container">
          <a href="facebook.com" className="social">
          <img src={Facebook} alt="Facebook" />
          </a>
          <a href="gmail.com" className="social">
          <img src={Google} alt="Facebook" />
          </a>
          <a href="linkedin.com" className="social">
          <img src={LinkedIn} alt="Facebook" />
          </a>
        </div>
        <span>Puedes usar tu e-mail para registrarte</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Correo Electronico"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button>Registrarse </button>
      </form>
    </div>
  );
}

export default SignUpForm;
