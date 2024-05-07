import React from "react";
import Facebook from "./assets/icons/Face.png";
import Google from "./assets/icons/Google.png";
import LinkedIn from "./assets/icons/Linked.png";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = state;

    localStorage.setItem("userData", JSON.stringify({ name, email, password }));
    alert(`Registrado con: ${name}, email: ${email}`);

    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crear Cuenta</h1>
        <div className="social-container"></div>
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
        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default SignUpForm;
