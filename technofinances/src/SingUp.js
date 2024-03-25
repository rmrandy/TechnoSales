import React from "react";
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
            <i className="fab fa-facebook-f" />
          </a>
          <a href="gmail.com" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="linkedin.com" className="social">
            <i className="fab fa-linkedin-in" />
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
