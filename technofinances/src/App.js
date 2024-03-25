import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/NavBar';
import Inicio from "./Pages/Inicio";
// import DemoPie from "./Pages/EResultados";
import LogIn from "./Pages/LogIn";
import Layout from './Layout'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>} />
        {/* <Route path="/EstadoResultados" element={<Layout><DemoPie /></Layout>} /> */}
        <Route path="/login" element={<Layout><LogIn /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
 