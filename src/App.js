import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header'
import Formulario from './components/Form/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]); 

  const [equipos, actualizarEquipos] = useState([
    {id:uuid(),titulo:'Programación', colorSecundario:'#D9F7E9', colorPrimario:'#57C278'},
    {id:uuid(),titulo:'Front End', colorSecundario:'#E8F8FF', colorPrimario:'#82CFFA'},
    {id:uuid(),titulo:'Data Science', colorSecundario:'#F0F8E2', colorPrimario:'#A6D157'},
    {id:uuid(),titulo:'Devops', colorSecundario:'#FDE7E8', colorPrimario:'#E06B69'},
    {id:uuid(),titulo:'UX y Diseño', colorSecundario:'#FAE9F5', colorPrimario:'#DB6EBF'},
    {id:uuid(),titulo:'Móvil', colorSecundario:'#FFF5D9', colorPrimario:'#FFBA05'},
    {id:uuid(),titulo:'Innovación y Gestión', colorSecundario:'#FFEEDF', colorPrimario:'#FF8A29'}
  ])

  //Mostrar o no los formularios
  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
  actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id)=>{
      const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id);
      actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipos
  const actualizarColor = (color, id)=>{
    const equiposActualizados = equipos.map( (equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo;
    }) 
    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  //Like?
  const like = (id)=>{
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados);
  }

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto Circuito --> condicion && seMuestra - No necesita un caso contrario
  return (
    <div  >
      <Header/>

      { mostrarFormulario && <Formulario 
      equipos = {equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo} 
      />}

      <MiOrg cambiarMostrar={cambiarMostrar}/> 

      {
        equipos.map( (equipo,index) =>  <Equipo 
        datos={equipo}
        key={index}
        //Se filtran para enviar solo los colaboradores que pertenecen a dicho equipo
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like={like}
        /> )
      }
      
      <Footer/>
    </div>

  );
}

export default App;
