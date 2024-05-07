import React, { useState, useEffect } from 'react';
import './EResultados.css';
import { Pie } from '@ant-design/plots';

export function EResultados(ingresos) {
  const [excelData] = useState([
    { Concepto: "Ventas", Monto: 0 },// Considerado como ingreso
    { Concepto: "Costo de Ventas", Monto: 15000 },
    { Concepto: "Ganancia Bruta", Monto: 85000 },
    { Concepto: "Gastos de Operación", Monto: 5000 },
    { Concepto: "Ganancia Operativa", Monto: 80000 },
    { Concepto: "Gastos Financieros", Monto: 1000 },
    { Concepto: "Ganancia Antes de Impuestos", Monto: 79000 },
    { Concepto: "Impuestos", Monto: 3000 },
    { Concepto: "Ganancia Neta", Monto: 76000 }
  ]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Filtrado para obtener solo los ingresos y gastos totales
    const totalIngresos = excelData
      .filter(item => item.Concepto === "Ventas")
      .reduce((acc, item) => acc + ingresos.value, 0);

    const totalGastos = excelData
      .filter(item => item.Concepto.includes("Gastos") || item.Concepto === "Costo de Ventas" || item.Concepto === "Impuestos")
      .reduce((acc, item) => acc + item.Monto, 0);

    setChartData([
      { Tipo: "Ingresos", Monto: totalIngresos },
      { Tipo: "Gastos", Monto: totalGastos }
    ]);
  }, [excelData]);

  const config = {
    data: chartData,
    angleField: 'Monto',
    colorField: 'Tipo',
    radius: 0.8,
    interactions: [{ type: 'element-active' }]
  };

  if (chartData.length === 0) {
    return <div>Cargando...</div>;  // Renderiza algo mientras los datos no están listos
  }

  return (
    <div className="financial-statement">
      <div className="titulos">
        <h1>Estado de Resultados</h1>
      </div>
      <div className="excel-table-container">
        <table>
          <thead>
            <tr>
              {excelData.length > 0 && Object.keys(excelData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, index) => (
                  <td key={index}>{typeof val === "number" ? val.toLocaleString() : val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grafica-comparacion">
        <h2>Comparación de Ingresos y Gastos</h2>
        <Pie {...config} />
      </div>
    </div>
  );
}Compile

export default EResultados;
