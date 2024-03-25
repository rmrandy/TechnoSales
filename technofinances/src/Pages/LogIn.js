import React, { useState } from "react";
import "./LogIn.css";
import SignInForm from "./SingIn";
import SignUpForm from "../SingUp";

export default function LogIn() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container" style={{marginLeft: "auto", marginRight: "auto", }}>
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bienvenido de Nuevo</h1>
              <p>
                para iniciar sesión puedes iniciar sesión con tu correo electronico. 
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Iniciar Sesión 
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola Amigo!</h1>
              <p>Ingresa tus datos para que podamos empezar un viaje juntos</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
               Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
