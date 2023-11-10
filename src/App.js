import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frecuencia from './Frecuencia';
import ListaRadiosAm from './ListaRadiosAm';
import ListaRadiosFm from './ListaRadiosFm';

export default function App() {
  return (
    
    
    <Router>
      <Routes>
        {/* Ruta para el componente principal */}
        <Route path="/" element={<Frecuencia />} />

        {/* Ruta para el componente ListaRadiosAm */}
        <Route path="/lista-radios-am" element={<ListaRadiosAm />} />

        {/* Ruta para el componente ListaRadiosFm */}
        <Route path="/lista-radios-fm" element={<ListaRadiosFm />} />
      </Routes>
    </Router>
  );
}


