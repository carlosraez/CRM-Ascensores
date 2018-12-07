import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './InputReserva.css'
import moment from 'moment'


export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 3.3,
       fechaFinalReunion:this.props.fechaFinalReunion,
       
       
       
   }

   tiempoFinal = () => {
    const { fechaFinalReunion ,height } = this.state 
    const tiempoInicio = parseInt(this.props.minutosTotales,10)  
    const minutosNuevos = height / 3.3
    const tiempoDeAumento = (Math.trunc(tiempoInicio - minutosNuevos) * -1)
    const horaFinal = moment(fechaFinalReunion, 'h:mm').add(tiempoDeAumento, 'minutes').format('h:mm')
    return horaFinal
   }
   
   render() {

    const { fechaInicioReunion , tituloReservaBaseDatos,  } = this.props
    
     return (
    <Rnd
    enableResizing={{bottom:true}}
    disableDragging={true}
    size={{ height: this.state.height, width:170 }}
    minHeight={66}
    className='reservaBorder' 
    onResize={(e, direction, ref, delta, position) => {
        this.setState({
            height: parseInt(ref.style.height,10),
        });
      }}
    >
    <h5>{`${fechaInicioReunion} - ${this.tiempoFinal()}`}</h5>
    <p>{tituloReservaBaseDatos}</p>    
    </Rnd>
     )
   }
}