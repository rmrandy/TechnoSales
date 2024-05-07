import React, { useState, useEffect } from "react";
import Facebook from "../assets/icons/Face.png";
import Google from "../assets/icons/Google.png";
import LinkedIn from "../assets/icons/Linked.png";
import { useNavigate } from "react-router-dom"; 

function SignInForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Utilizar useEffect para cargar los datos al iniciar el componente
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { email, password } = JSON.parse(userData);
      setEmail(email);
      setPassword(password);
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Obtener los datos de autenticación almacenados en Local Storage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);
    
      // Comparar los datos del formulario con los almacenados
      if (email === storedEmail && password === storedPassword) {
        navigate("/dash"); // Asegúrate de que la ruta '/dash' esté definida en tus rutas
      } else {
        alert("Credenciales incorrectas");
      }
    } else {
      alert("No hay datos de usuario almacenados. Por favor, registrese primero.");
    }
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Iniciar Sesión</h1>
        <div className="social-container">
        </div>
        <span>También puedes iniciar sesión con tu cuenta de correo electrónico</span>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default SignInForm;
