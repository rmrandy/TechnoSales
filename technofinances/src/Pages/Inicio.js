import React from "react";
import "./Inicio.css";
import { useNavigate } from "react-router-dom";
import invoicingIcon from "../assets/icons/invoicing.png";
import expenseTrackingIcon from "../assets/icons/expense-tracking.png";
import financialReportingIcon from "../assets/icons/financial-reporting.png";
import estadoResultados from "../assets/icons/EstadoResultados.png";
import tranferencia from "../assets/icons/Transferencia.png";
import balance from "../assets/icons/BalanceGeneral.png";
import jhon from "../assets/icons/JhonDoe.png"
import jhona from  "../assets/icons/Jhonaaaa.png"
import miguel from  "../assets/icons/lola.png"

function Inicio() {
  const navigate = useNavigate();
  const handleDiscoverMoreClick = () => {
    navigate("/login");
  };

  const testimonios = [
    {
      id: 0,
      nombre: "John Doe",
      testimonio:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ",
      imagen: jhon
    } ,
    {
      id: 0,
      nombre: "Jane Doe",
      testimonio:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi",
      imagen: jhona
    },
    {
      id: 0,
      nombre: "Mike Doe",
      testimonio:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi",
      imagen: miguel
    }
     
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a Techno Numbers</h1>
        <p>La solución completa para gestionar tus finanzas</p>
        <button onClick={handleDiscoverMoreClick}>Descubre Más</button>
      </section>

      <section className="features-section">
        <div className="features">
          {[
            {
              icon: invoicingIcon,
              title: "Facturación Fácil",
              description: "Gestiona tus facturas sin complicaciones.",
            },
            {
              icon: expenseTrackingIcon,
              title: "Seguimiento de Gastos",
              description:
                "Mantén un registro de tus gastos de forma sencilla.",
            },
            {
              icon: financialReportingIcon,
              title: "Informes Financieros",
              description:
                "Obtén informes detallados para tomar mejores decisiones.",
            },
          ].map((feature) => (
            <div className="feature" key={feature.title}>
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="financial-statement-section">
        <div className="financial-statement-content">
          <img
            src={estadoResultados}
            alt="Estado de Resultados"
            className="financial-statement-image"
          />
          <div className="financial-statement-text">
            <h2>Estado de Resultados</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
        </div>
      </section>
      <section className="transferencia-statement-section">
        <div className="transferencia-statement-content">
          <img
            src={tranferencia}
            alt="Estado de Resultados"
            className="transferencia-statement-image"
          />
          <div className="transferencia-statement-text">
            <h2>Transferencias Moviles</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
        </div>
      </section>
      <section className="transferencia-statement-section">
        <div className="transferencia-statement-content">
          <img
            src={balance}
            alt="Balance General "
            className="transferencia-statement-image"
          />
          <div className="transferencia-statement-text">
            <h2>Calculo de Balance General</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
        </div>
      </section>
      <section className="testimonios-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonios-container">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="testimonio">
              <img src={testimonio.imagen} alt={testimonio.nombre} />
              <h3>{testimonio.nombre}</h3>
              <p>{testimonio.testimonio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;
