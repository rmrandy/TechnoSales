import React, { useState, useEffect } from 'react';
import './Transacciones.css';
import data from "../DATA/estadoResultadosData.json";
import dataBG from "../DATA/balanceGeneralData.json";

export function DebtManagement() {
    const [selectedIngresos, setSelectedIngresos] = useState("");
    const [selectedGastos, setSelectedGastos] = useState("");
    const [selectedActivos, setSelectedActivos] = useState("");
    const [selectedPasivos, setSelectedPasivos] = useState("");
    const [selectedPatrimonio, setSelectedPatrimonio] = useState("");
    const [inputIngresos, setInputIngresos] = useState(0);
    const [inputGastos, setInputGastos] = useState(0);
    const [inputActivos, setInputActivos] = useState(0);
    const [inputPasivos, setInputPasivos] = useState(0);
    const [inputPatrimonio, setInputPatrimonio] = useState(0);
    
    

    const handleInputChange = (e, setInputValue) => {
        const newValue = parseFloat(e.target.value);
        setInputValue(newValue);
    };

    const handleSelectChange = (e, setInputValue, setSelectedOption) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setInputValue(0); 
    };

    function listAccounts(typeAccount) {
        return typeAccount.map((item, index) => (
            <option key={index} value={index}>{item.name}</option>
        ));
    };

    function handleChange(typeAccount, selectedOption, inputValue) {
        if (selectedOption !== "") {
            typeAccount[selectedOption].value = inputValue;
        }
    };

    useEffect(() => {
        const savedIngresos = localStorage.getItem('ingresos');
        if (savedIngresos) {
            setInputIngresos(parseFloat(savedIngresos));
        }
    }, []);

    return (
        <div className="debt-management-container">
            <h1>Gestión de Deudas</h1>
            <div className="row">
                <h4>Ingresos</h4>
                <select value={selectedIngresos} onChange={(e) => handleSelectChange(e, setInputIngresos, setSelectedIngresos)}>
                    <option value="">Seleccione uno</option>
                    {listAccounts(data.ingresos)}
                </select>
                <input type="number" value={inputIngresos} onChange={(e) => handleInputChange(e, setInputIngresos)} />
            </div>
            <div className="row">
                <h4>Gastos</h4>
                <select value={selectedGastos} onChange={(e) => handleSelectChange(e, setInputGastos, setSelectedGastos)}>
                    <option value="">Seleccione uno</option>
                    {listAccounts(data.gastos)}
                </select>
                <input type="number" value={inputGastos} onChange={(e) => handleInputChange(e, setInputGastos)} />
            </div>
            <div className="row">
                <h4>Activos</h4>
                <select value={selectedActivos} onChange={(e) => handleSelectChange(e, setInputActivos, setSelectedActivos)}>
                    <option value="">Seleccione uno</option>
                    {listAccounts(dataBG.activos)}
                </select>
                <input type="number" value={inputActivos} onChange={(e) => handleInputChange(e, setInputActivos)} />
            </div>
            <div className="row">
                <h4>Pasivos</h4>
                <select value={selectedPasivos} onChange={(e) => handleSelectChange(e, setInputPasivos, setSelectedPasivos)}>
                    <option value="">Seleccione uno</option>
                    {listAccounts(dataBG.pasivos)}
                </select>
                <input type="number" value={inputPasivos} onChange={(e) => handleInputChange(e, setInputPasivos)} />
            </div>
            <div className="row">
                <h4>Patrimonio</h4>
                <select value={selectedPatrimonio} onChange={(e) => handleSelectChange(e, setInputPatrimonio, setSelectedPatrimonio)}>
                    <option value="">Seleccione uno</option>
                    {listAccounts(dataBG.patrimonio)}
                </select>
                <input type="number" value={inputPatrimonio} onChange={(e) => handleInputChange(e, setInputPatrimonio)} />
            </div>
            <button onClick={() => {
                handleChange(data.ingresos, selectedIngresos, inputIngresos);
                handleChange(data.gastos, selectedGastos, inputGastos);
                handleChange(dataBG.activos, selectedActivos, inputActivos);
                handleChange(dataBG.pasivos, selectedPasivos, inputPasivos);
                handleChange(dataBG.patrimonio, selectedPatrimonio, inputPatrimonio);
                console.log(data);
                console.log(dataBG);
            }}>
                Guardar datos
            </button>
        </div>
    );
}

export default DebtManagement;
