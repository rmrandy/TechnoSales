import React, { useState, useEffect } from 'react';
import './Transacciones.css';
import data from "../DATA/estadoResultadosData.json";
import dataBG from "../DATA/balanceGeneralData.json";


export function DebtManagement () {
    let totalDebe=0;
    let totalHaber=0;
    function listAccounts(typeAccount){
        const options = typeAccount.map((item, index) => {
            const key = Object.keys(item)[0]; // Get the first key from each object
            const name = item.name; // Get the "name" property
            return <option key={index} value={index}>{name}</option>;
        });
        return options;
    };

    function handleChange(typeAccount, selectedOption, inputValue){
      typeAccount[selectedOption].value = inputValue;
    };
    const handleInputChange = (e, setInputValue) => {
        const newValue = parseFloat(e.target.value); // Parse input value as a number
        setInputValue(newValue);
    };
  
  const handleSelectChange = (e,setInputValue, setSelectedOption) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // Update selected option
    // You can set the input value based on the selected index or any other logic here
    setInputValue(0); // For now, setting it to 0
  };

  // Handle input change
    const [selectedIngresos, setSelectedIngresos] = useState(0); // State to track selected option
    const [selectedGastos, setSelectedGastos] = useState(0); // State to track selected option
    const [selectedActivos, setSelectedActivos] = useState(0); // State to track selected option
    const [selectedPasivos, setSelectedPasivos] = useState(0); // State to track selected option
    const [selectedPatrimonio, setSelectedPatrimonio] = useState(0); // State to track selected option
    const [inputIngresos, setInputIngresos] = useState(0); // State to track input value
    const [inputGastos, setInputGastos] = useState(0); // State to track input value
    const [inputActivos, setInputActivos] = useState(0); // State to track input value
    const [inputPasivos, setInputPasivos] = useState(0); // State to track input value
    const [inputPatrimonio, setInputPatrimonio] = useState(0); // State to track input value

   return (
    <div className="debt-management-container">
      <h1>Gestión de Deudas</h1>
        <h4>Ingresos</h4>
        <div className="row">
          <select value={selectedIngresos} onChange={(e) => handleSelectChange(e,setInputIngresos,setSelectedIngresos)}>
            <option value={null}>Seleccione uno</option>     
            {listAccounts(data.ingresos)}
          </select>
          <input type="number" value={inputIngresos} onChange={(e) => handleInputChange(e, setInputIngresos)}></input>
        </div>
        <h4>Gastos</h4>
        <div className="row">
          <select value={selectedGastos} onChange={(e) =>handleSelectChange(e, setInputGastos, setSelectedGastos)}>
            <option value={null}>Seleccione uno</option>     
            {listAccounts(data.gastos)}
          </select>
          <input type="number" value={inputGastos} onChange={(e) => handleInputChange(e,setInputGastos)}></input>
        </div>
         <h4>Activos</h4>
        <div className="row">
          <select value={selectedActivos} onChange={(e) => handleSelectChange(e, setInputIngresos, setSelectedActivos)}>
            <option value={null}>Seleccione uno</option>     
            {listAccounts(dataBG.activos)}</select>
          <input type="number" value={inputActivos} onChange={(e) => handleInputChange(e, setInputActivos)}></input>
        </div>
         <h4>Pasivos</h4>
        <div className="row">
          <select value={selectedPasivos} onChange={(e) => handleSelectChange(e, setInputPasivos, setSelectedPasivos)}>
            <option value={null}>Seleccione uno</option>     
            {listAccounts(dataBG.pasivos)}
          </select>
          <input type="number" value={inputPasivos} onChange={(e) => handleInputChange(e, setInputPasivos)}></input>
        </div>        
         <h4>Patrimonio</h4>
       <div className="row">
          <select value={selectedPatrimonio} onChange={(e) => handleSelectChange(e, setInputPatrimonio, setSelectedPatrimonio)}>
            <option value={null}>Seleccione uno</option>     
            {listAccounts(dataBG.patrimonio)}
          </select>
          <input type="number" value={inputPatrimonio} onChange={(e) => handleInputChange(e, setInputPatrimonio)}></input>
        </div>
        <>
        <button onClick={()=>{
            handleChange(data.ingresos, selectedIngresos, inputIngresos)
            handleChange(data.gastos, selectedGastos, inputGastos)
            handleChange(dataBG.activos, selectedActivos, inputActivos)
            handleChange(dataBG.pasivos, selectedPasivos, inputPasivos)
            handleChange(dataBG.patrimonio, selectedPatrimonio, inputPatrimonio)
            console.log(data);
            console.log(dataBG);
        }}>Este es un botton</button>
        </>
       </div>
     );
 }

export default data;

