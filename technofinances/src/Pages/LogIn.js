import React, { useState } from "react";
import "./LogIn.css";
import SignInForm from "./SingIn"; // Asegúrate de que el nombre del archivo sea correcto
import SignUpForm from "../SingUp"; // Asegúrate de que el nombre del archivo y la ruta sean correctos

export default function LogIn() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    setType(text);
  };
  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <div className={containerClass} id="container" style={{marginLeft: "auto", marginRight: "auto"}}>
        {type === "signIn" && <SignInForm />}
        {type === "signUp" && <SignUpForm />}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bienvenido de Nuevo</h1>
              <p>Para poder iniciar sesión coloca tu correo electrónico.</p>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                Iniciar Sesión
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola Amigo!</h1>
              <p>Ingresa tus datos para que podamos empezar un viaje juntos</p>
              <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
