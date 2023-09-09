import './Formulario.css'
import { useState } from 'react'
import Campo from '../Campo/Campo'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("#000000");

    const{registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event)=>{
        event.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo:titulo, colorPrimario:color})
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            < Campo
            titulo = "Puesto"
            placeholder = "Ingresar puesto"
            required valor = {puesto}
            actualizarValor = {actualizarPuesto}
            /> 

            < Campo 
                titulo = "Foto"
                placeholder = "Ingresar enlace de foto"
                required valor = {foto}
                actualizarValor = {actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo="titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            < Campo
            type="color"
            titulo = "Color"
            placeholder = "Ingresar el color en hexadecimal"
            required 
            valor = {color}
            actualizarValor = {actualizarColor}
            /> 
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}
 
export default Formulario