import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {

    const {type="text"} = props; //Con esta tecnica podemos darle un valor por defecto en caso que no este definido

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            type={type}
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange = {manejarCambio}
        />
    </div>
}

export default Campo