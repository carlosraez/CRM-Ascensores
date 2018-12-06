import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './InputReserva.css'


  

export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 3.3,
       
   }

   render() {

    const { fechaInicioReunion ,fechaFinalReunion, tituloReservaBaseDatos,  } = this.props
    
     return (
    <Rnd
    enableResizing={{bottom:true}}
    disableDragging={true}
    size={{ height: this.state.height, width:170 }}
    minHeight={66}
    className='reservaBorder' 
    onResizeStop={(e, direction, ref, delta, position) => {
        console.log('h');
        
        this.setState({
            height: ref.style.height,
        });
      }}
    >
    <h5>{`${fechaInicioReunion} - ${fechaFinalReunion}`}</h5>
    <p>{tituloReservaBaseDatos}</p>    
    </Rnd>
     )
   }
}