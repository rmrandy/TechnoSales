import React, { useEffect, useRef } from 'react';
import "./EResultados.css";
import datos from "../DATA/gastos.json"

import { Column } from '@ant-design/plots';
function EResultados() {

  const chartRef = useRef();
  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
    }
  }, []);
  const config = {
    data: datos, 
    xField: 'ciudad',
    yField: 'ventas',
    slider: {
      x: {
        values: [0.1, 0.2],
      },
    },
  };

  return (
    <div className="financial-statement">
      <div className="titulos">
        <h1>Resultado Financiero</h1>
        <div className="apartados"> "Que va aquí??</div>
        <div className="apartados"> "Que va aquí??</div>
      </div>
      <div className="datos">
      <Column {...config} ref={chartRef}/>
        </div>
    </div>
  );
}

export default EResultados;
