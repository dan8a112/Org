import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header'
import Formulario from './components/Form/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Colaborador from './components/Colaborador/Colaborador';
import Footer from './components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]); 

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
  actualizarColaboradores([...colaboradores,colaborador])
  }

  
  //Lista de equipos
  const equipos = [
    {titulo:'Programacion', colorSecundario:'#D9F7E9', colorPrimario:'#57C278'},
    {titulo:'Front End', colorSecundario:'#E8F8FF', colorPrimario:'#82CFFA'},
    {titulo:'Data Science', colorSecundario:'#F0F8E2', colorPrimario:'#A6D157'},
    {titulo:'Devops', colorSecundario:'#FDE7E8', colorPrimario:'#E06B69'},
    {titulo:'UX y Diseño', colorSecundario:'#FAE9F5', colorPrimario:'#DB6EBF'},
    {titulo:'Móvil', colorSecundario:'#FFF5D9', colorPrimario:'#FFBA05'},
    {titulo:'Innovación y  Gestión', colorSecundario:'#FFEEDF', colorPrimario:'#FF8A29'}
] 

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto Circuito --> condicion && seMuestra - No necesita un caso contrario
  return (
    <div  >
      <Header/>
      { mostrarFormulario && <Formulario 
      equipos = {equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/> 
      {
        equipos.map( (equipo,index) =>  <Equipo 
        datos={equipo}
        key={index}
        //Se filtran para enviar solo los colaboradores que pertenecen a dicho equipo
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}/> )
      }
      <Footer/>
    </div>

  );
}

export default App;
