import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [numeroRandomGenerado, generarNumeroRandom] = useState(null);
  const [error, configurarError] = useState(null);

  async function numeroAlAzar() {    configurarError(null);
    try {
      const respuesta = await axios.post('http://localhost:3001/numero-random');
      generarNumeroRandom(respuesta.data.value);
    } catch (error) {
      configurarError('Error en el generado del numero');
    } 
  };


  return (
    <div className="App">
      <h1>Generar numero aleatorio</h1>
      <button onClick={numeroAlAzar}>
        {'Generar Numero Al Azar'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {numeroRandomGenerado != null && (
        <div className="numero-contenedor">
          <p className="numeroRandom"> El numero generado al azar es: {numeroRandomGenerado}</p>
        </div>
      )}
    </div>
  );
  
  
}

export default App;
