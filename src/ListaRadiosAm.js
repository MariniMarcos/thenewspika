import React from 'react'
import Radio from './Radio'
import { api } from './api';

const ListaRadiosAm = () => {
  return (
    <div>
      {api.am.map((radio) => (
        <Radio
          key={radio.nombre}
          url={radio.url}
          nombre={radio.nombre}
          frecuencia={radio.frecuencia}
        />
      ))}
    </div>
  )
}

export default ListaRadiosAm