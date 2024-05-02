import React from "react";
import "./Dash.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
//import { Link } from 'react-router-dom';



const financialStatusData = [
  { name: "Ingresos", value: 400, color: "#00C49F" },
  { name: "Gastos", value: 300, color: "#FF8042" },
];

const balanceSheetData = [
  { name: "Activos", value: 200, color: "#0088FE" },
  { name: "Pasivos", value: 100, color: "#FFBB28" },
  { name: "Patrimonio", value: 100, color: "#00C49F" },
];

const debtManagementData = [
  { name: "Deudas", value: 38, color: "#FF8042" },
  { name: "Ganancias", value: 62, color: "#00C49F" },
];

const gainsData = { name: "Ganancias", value: 78000 };
const lossesData = { name: "Pérdidas", value: 12000 };

const DashboardContent = () => {
  const renderPieChart = (data, title, color) => (
    // <Link to="/EstadoResultados" >
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
    <div className="financial-summary-card" style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>${data.value.toLocaleString()}</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
      </div>
      <div className="dashboard-cards">
        {renderPieChart(financialStatusData, "Estado de Resultados", "#00C49F")}
        {renderPieChart(balanceSheetData, "Balance General", "#0088FE")}
        {renderPieChart(debtManagementData, "Gestión de Deudas", "#FF8042")}
      </div>
      <div className="financial-summary">
        {renderFinancialSummary(gainsData, 'Ganancias Totales', '#E9F7EF')}
        {renderFinancialSummary(lossesData, 'Pérdidas Totales', '#FDEDEC')}
      </div>
    </div>
  );
};

export default DashboardContent;
