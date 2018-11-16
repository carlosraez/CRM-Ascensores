import React, { Component } from 'react';
import { Configurador } from './Configurador.js'





export class Mantenimientos extends Component {
  state = {


   }

   render() {

     return (
       <div className="row">
              <div className="col-12 col-md-3">
                 <Configurador
                   nombreOferta={'Oferta Mantenimiento'}
                   nombreConfiguracionGuardar={'Oferta Mantenimiento'}
                 />
              </div>
          <div className="col-12 col-md-3">
              <Configurador
                nombreOferta={'Oferta Normal'}
                nombreConfiguracionGuardar={'Oferta Normal'}

               />
         </div>
         <div className="col-12 col-md-3">
            <Configurador
                nombreOferta={'Administrador Estrella'}
                nombreConfiguracionGuardar={'Administrador Estrella'}
            />
        </div>
        <div className="col-12 col-md-3">
            <Configurador
                nombreOferta={'Administrador Normal'}
                nombreConfiguracionGuardar={'Administrador Normal'}
             />
        </div>
       </div>

     )
   }
}
