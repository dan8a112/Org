import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador';

const Equipo = (props)=>{

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos;

    const {colaboradores} = props;
    
    const styleEquipo = {
        backgroundColor: colorSecundario
    }

    const styleTitulo = {
        borderColor:colorPrimario
    }

    //Si existe un colaborador en la lista, se muestra el equipo, si no, no 
    return (colaboradores.length > 0 && <section className="equipo" style={styleEquipo}>

        <h3 className='titulo' style={styleTitulo}> {titulo} </h3>

        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) => <Colaborador 
                key={index} 
                datos={colaborador}
                colorPrimario={colorPrimario}
                /> )
            }
        </div>

    </section>)
}

export default Equipo