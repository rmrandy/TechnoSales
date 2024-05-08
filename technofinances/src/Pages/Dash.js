import React from "react";
import "./Dash.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Link } from 'react-router-dom';

const financialStatusData = [
  { name: "Ingresos", value: 400, color: "#00C49F" },
  { name: "Gastos", value: 300, color: "#FF8042" },
];

const gainsData = { name: "Ganancias", value: 78000 };
const lossesData = { name: "Pérdidas", value: 12000 };

const DashboardContent = () => {
  const renderPieChart = (data, title, color) => (
    <div className="dashboard-card" style={{ borderColor: color }}>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <h3>{title}</h3>
    </div>
  );

  const renderFinancialSummary = (data, title, bgColor) => (
    <div
      className="financial-summary-card"
      style={{ backgroundColor: bgColor }}
    >
      <h2>{title}</h2>
      <p>${data.value.toLocaleString()}</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header"></div>
      <div className="dashboard-cards">
        <Link to="/EstadoResultados" >
          {renderPieChart(
            financialStatusData,
            "Estado de Resultados",
            "#00C49F"
          )}
        </Link>
        <Link to="/BalanceGeneral" >
          {renderPieChart(
            financialStatusData,
            "Balance General",
            "#00C49F"
          )}
        </Link>
        <Link to="/Transacciones" >
          {renderPieChart(
            financialStatusData,
            "Gestion de Deudas",
            "#00C49F"
          )}
        </Link>
      </div>
      <div className="financial-summary">
        {renderFinancialSummary(gainsData, "Ganancias Totales", "#E9F7EF")}
        {renderFinancialSummary(lossesData, "Pérdidas Totales", "#FDEDEC")}
      </div>
    </div>
  );
};

export default DashboardContent;
