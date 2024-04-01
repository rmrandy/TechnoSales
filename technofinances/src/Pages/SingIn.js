import React, { useState } from "react";
import Facebook from "../assets/icons/Face.png";
import Google from "../assets/icons/Google.png";
import LinkedIn from "../assets/icons/Linked.png";
import { useNavigate } from "react-router-dom"; 

function SignInForm({ defaultEmail = "", defaultPassword = "" }) {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const navigate = useNavigate(); 
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@empresa.com" && password === "ADMIN123") {
      navigate("/dash"); 
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Iniciar Sesión </h1>
        <div className="social-container">
          <a href="https://www.facebook.com" className="social" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.google.com" className="social" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="Google" />
          </a>
          <a href="https://www.linkedin.com" className="social" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <span>
          También puedes iniciar sesión con tu cuenta de correo electrónico
        </span>
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">¿Olvidaste tu contraseña?</a>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default SignInForm;
