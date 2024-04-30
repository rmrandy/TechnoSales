import React from "react";
import { Pie } from "@ant-design/plots";
import balanceData from "../DATA/balance.json";
import ChatComponent from "../Componentes/ChatComponent";
import "./BGeneral.css";

const FinancialReport = () => {
  const pieConfig = {
    appendPadding: 10,
    angleField: "valor",
    colorField: "tipo",
    radius: 0.9,
    //label: {
      //type: "none",
      //content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    //},
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };



  if (!balanceData.activos || !balanceData.pasivos) {
    return <div>Cargando...</div>;
  }

  const renderTableRows = (items) => {
    return items.map((item, index) => (
      <tr key={index}>
        <td>{item.tipo}</td>
        <td>{`$${item.valor.toLocaleString()}`}</td>
      </tr>
    ));
  };

  return (
    <div className="financial-report-container">
      <div className="charts-container">
        {balanceData.activos && (
          <div className="pie-chart" id="assets-chart">
            <Pie {...pieConfig} data={balanceData.activos} />
          </div>
        )}
        {balanceData.pasivos && (
          <div className="pie-chart" id="liabilities-chart">
            <Pie {...pieConfig} data={balanceData.pasivos} />
          </div>
        )}
      </div>
      <div className="financial-report-container">
        <h1 id="resultadoFinanciero" >Resultado Financiero</h1>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Monto (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="table-section-header">
                Activos
              </td>
            </tr>
            {renderTableRows(balanceData.activos)}
            <tr>
              <td colSpan="2" className="table-section-header">
                Pasivos
              </td>
            </tr>
            {renderTableRows(balanceData.pasivos)}
            <tr>
              <td colSpan="2" className="table-section-header">
                Patrimonio
              </td>
            </tr>
            {renderTableRows(balanceData.patrimonio)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialReport;
