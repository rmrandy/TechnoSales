import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import './Transacciones.css';
import initialDebts from "../DATA/transacciones.json";
import balanceData from "../DATA/balance.json";


export default function DebtManagement () {
  const [fondos, setFondos] = useState(); // Nuevo saldo disponible por defecto
  const [debts, setDebts] = useState(() => JSON.parse(localStorage.getItem('debts')) || initialDebts);
  const [availableFunds, setAvailableFunds] = useState(() => {
    const storedFunds = Number(localStorage.getItem('availableFunds'));
    return isNaN(storedFunds) ? fondos : storedFunds;
  });

  useEffect(() => {
    localStorage.setItem('debts', JSON.stringify(debts));
    localStorage.setItem('availableFunds', availableFunds.toString());
  }, [debts, availableFunds]);

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

  const filteredDebts = debts.filter(debt => debt.valor > 0);

  const pieConfig = {
    appendPadding: 10,
    data: filteredDebts,
    angleField: 'valor',
    colorField: 'tipo',
    radius: 0.8,
    interactions: [{ type: 'element-active' }],
  };

  return (
    <div className="debt-management-container">
      <h1>Gestión de Deudas</h1>
      <form onSubmit={fondos}>
        <label>
        Fondos Iniciales:
        <input type="text" name="fondosIniciales" placeholder='Por favor ingrese sus fondos'
          value={fondos}
          onChange={(e)=>{setFondos(e.target.value)}}
        />
        </label>
        <input type="submit" value="Submit"/>
     </form>

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

