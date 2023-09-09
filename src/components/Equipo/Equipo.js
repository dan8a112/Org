import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=>{

    //Destructuracion
    const {colorPrimario, titulo, id} = props.datos;

    const {colaboradores, eliminarColaborador, actualizarColor,like} = props;
    
    const styleEquipo = {
        backgroundColor: hexToRgba(colorPrimario,0.6)
    }

    const styleTitulo = {
        borderColor:colorPrimario
    }

    //Si existe un colaborador en la lista, se muestra el equipo, si no, no 
    return (colaboradores.length > 0 && <section className="equipo" style={styleEquipo}>

        <input
            type='color'
            className='input-color'
            value={colorPrimario}
            onChange={(event)=>{
                  actualizarColor(event.target.value,id);
            }}
        />

        <h3 className='titulo' style={styleTitulo}> {titulo} </h3>

        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) => <Colaborador 
                key={index} 
                datos={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                /> )
            }
        </div>

    </section>)
}

export default Equipo