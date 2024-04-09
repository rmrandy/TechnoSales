import React, { useEffect, useRef, useState } from "react";
import "./EResultados.css";
import ChatComponent from "../Componentes/ChatComponent";
import datos from "../DATA/gastos.json";
import * as XLSX from "xlsx";
import { Column } from "@ant-design/plots";

function useSlotMachineEffect(finalValue, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newValue = Math.min(finalValue * (progress / duration), finalValue);
      setValue(newValue);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setValue(finalValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [finalValue, duration]);

  return Math.floor(value);
}

function EResultados() {
  const chartRef = useRef();
  const [excelData, setExcelData] = useState([]);
  const animatedIngresos = useSlotMachineEffect(100000, 3000);
  const animatedGastos = useSlotMachineEffect(22000, 3000);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const animateExcelData = (finalData) => {
    let frameId;
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentData = finalData.map((row) => {
        const currentRow = {};
        Object.keys(row).forEach((key) => {
          const value = row[key];
          currentRow[key] =
            typeof value === "number" ? Math.floor(value * progress) : value;
        });
        return currentRow;
      });

      setExcelData(currentData);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
    };
  };

  useEffect(() => {
    const filePath = `${process.env.PUBLIC_URL}/Estado_de_Resultados.xlsx`;
    fetch(filePath)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const wb = XLSX.read(buffer, { type: "buffer" });
        const sheetName = wb.SheetNames[0];
        const sheet = wb.Sheets[sheetName];
        const finalData = XLSX.utils.sheet_to_json(sheet);
        animateExcelData(finalData);
      });
  }, []);

  useEffect(() => {
    const filePath = `${process.env.PUBLIC_URL}/Estado_de_Resultados.xlsx`;
    fetch(filePath)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const wb = XLSX.read(buffer, { type: "buffer" });
        const sheetName = wb.SheetNames[0];
        const sheet = wb.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { raw: true });
        setExcelData(data);
      });
  }, []);

  const config = {
    data: datos,
    xField: "Día",
    yField: "Gastos",

    interactions: [
      {
        type: "slider",
        cfg: {
          start: 0,
          end: 1,
        },
      },
    ],
  };

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    setMessages([...messages, { id: Date.now(), text: currentMessage }]);
    setCurrentMessage("");
  };

  return (
    <div className="financial-statement">
      <div className="titulos">
        <h1>Resultado Financiero</h1>
        <div className="detalle-ingresos">
          Ingresos Totales: ${animatedIngresos.toLocaleString()}
        </div>
        <div className="detalle-gastos">
          Gastos Totales: ${animatedGastos.toLocaleString()}
        </div>
      </div>
      <div className="datos">
        <Column {...config} ref={chartRef} />
      </div>
      <div className="excel-table-container">
        <table>
          <thead>
            <tr>
              {excelData.length > 0 &&
                Object.keys(excelData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>
                    {typeof val === "number" ? val.toLocaleString() : val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Realiza tus preguntas aquí</h2>
      <ChatComponent />
    </div>
  );
}

export default EResultados;
