import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header'
import Formulario from './components/Form/Formulario';
import MiOrg from './components/MiOrg/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar]= useState(true);

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto Circuito --> condicion && seMuestra - No necesita un caso contrario
  return (
    <div  >
      <Header/>
      { mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/> 
    </div>
  );
}

export default App;
