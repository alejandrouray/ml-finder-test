import React from 'react';
import './Error.sass';

const Error = () => (
  <div className="error__container">
    <span className="error__container-title">No se encontraron resultados</span>
    <span className="error__container-subtitle">Intentá con otras palabras claves</span>
    <img alt="Error" src="error.png" />
  </div>
);

export default Error;
