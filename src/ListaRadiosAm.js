import React, { useState } from 'react';
import Radio from './Radio';
import { api } from './api';
import Menu from './Menu';

const ListaRadiosAm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar radios basándonos en el término de búsqueda
  const filteredRadios = api.am.filter((radio) =>
  radio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  radio.frecuencia.toString().includes(searchTerm)
);

  return (
    <div>
      <Menu />

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre o frecuencia"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de radios filtrada */}
      {filteredRadios.map((radio) => (
        <Radio
          key={radio.nombre}
          url={radio.url}
          nombre={radio.nombre}
          frecuencia={radio.frecuencia}
        />
      ))}
    </div>
  );
}

export default ListaRadiosAm;

