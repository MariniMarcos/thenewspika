import React, { useState } from 'react';
import Radio from './Radio';
import { api } from './api';
import Menu from './Menu';
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";

const ListaRadiosAm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar radios basándonos en el término de búsqueda
  const filteredRadios = api.am.filter((radio) =>
  radio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  radio.frecuencia.toString().includes(searchTerm)
);

  return (
    <div className='fondoListaRadios'>
      <Menu />

     {/* Input de búsqueda */}
     <div className='search' >
      <Input
        type="text"
        placeholder="Buscar por nombre o frecuencia"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/70 dark:placeholder:text-white/60",
            "font-size-lg"
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}  
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      </div>

      {/* Lista de radios filtrada */}
      {filteredRadios.map((radio) => (
        <Radio
          key={radio.nombre}
          url={radio.url}
          nombre={radio.nombre}
          frecuencia={radio.frecuencia}
          imagen={radio.imagen}
        />
      ))}
    </div>
  );
}

export default ListaRadiosAm;

