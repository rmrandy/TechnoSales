import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/NavBar';
import Inicio from "./Pages/Inicio";
import DemoPie from "./Pages/EResultados";
import LogIn from "./Pages/LogIn";
import Layout from './Layout'; 
import Dash from "./Pages/Dash"
import BGeneral from "./Pages/BGeneral"
import Transacciones from "./Pages/Transacciones";
 
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>} />
        <Route path="/EstadoResultados" element={<Layout><DemoPie /></Layout>} />
        <Route path="/login" element={<Layout><LogIn /></Layout>} />
        <Route path='/dash' element={<Layout><Dash /></Layout>}/>
        <Route path='/BalanceGeneral' element={<Layout><BGeneral /></Layout>}/>
        <Route path='/Transacciones' element={<Layout><Transacciones /></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
  