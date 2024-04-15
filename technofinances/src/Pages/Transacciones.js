import React, { useState } from 'react';
import { Pie } from '@ant-design/plots';
import './Transacciones.css'; 

const initialDebts = [
  { tipo: "Cuentas por pagar", valor: 7000 },
  { tipo: "Préstamos a corto plazo", valor: 10000 },
  { tipo: "Préstamos a largo plazo", valor: 40000 },
  { tipo: "Obligaciones por arrendamiento", valor: 12000 }
];

const DebtManagement = () => {
  const [debts, setDebts] = useState(initialDebts);
  const [availableFunds, setAvailableFunds] = useState(78000);

  const handlePayment = (index, paymentAmount) => {
    if (paymentAmount <= availableFunds && paymentAmount > 0) {
      const updatedDebts = debts.map((debt, idx) => {
        if (idx === index) {
          return { ...debt, valor: Math.max(debt.valor - paymentAmount, 0) };
        }
        return debt;
      });

      setAvailableFunds(availableFunds - paymentAmount);
      setDebts(updatedDebts);
    } else {
      alert('Fondos insuficientes o monto inválido');
    }
  };

  const handleReset = (index) => {
    const originalDebtValue = initialDebts[index].valor;
    const currentDebtValue = debts[index].valor;
    const difference = originalDebtValue - currentDebtValue;

    setAvailableFunds(availableFunds + difference);

    const updatedDebts = debts.map((debt, idx) => {
      if (idx === index) {
        return { ...debt, valor: originalDebtValue };
      }
      return debt;
    });

    setDebts(updatedDebts);
  };

  const pieConfig = {
    appendPadding: 10,
    data: debts.filter(debt => debt.valor > 0),  
    angleField: 'valor',
    colorField: 'tipo',
    color: ['#ffffff', '#3498db', '#9b59b6', '#f39c12', '#d35400'],
    radius: 0.8,
    label: {
      type: 'outer',
      content: ({ data }) => `${data.tipo}: $${data.valor.toLocaleString()}`,
    },
    interactions: [{ type: 'element-active' }],
  };

  if (!debts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="debt-management-container">
      <h1>Gestión de Deudas</h1>
      <p>Saldo Disponible: ${availableFunds.toLocaleString()}</p>
      <Pie {...pieConfig} />
      {debts.map((debt, index) => (
        <div key={index} className="debt-item">
          <span>{debt.tipo}: ${debt.valor.toLocaleString()}</span>
          <input 
            type="number" 
            placeholder="Cantidad a abonar" 
            min="0"
            max={availableFunds}
            onChange={(e) => handlePayment(index, parseFloat(e.target.value))}
          />
          <button onClick={() => handlePayment(index, debt.valor)}>Pagar Todo</button>
          <button onClick={() => handleReset(index)}>Resetear</button>
        </div>
      ))}
    </div>
  );
};

export default DebtManagement;
