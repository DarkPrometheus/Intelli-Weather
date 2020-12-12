import React, { useState } from 'react';
import "../../css/Sensores.css";
import { DatosSensoresService } from '../../services/DatosSensoresService';
import { db } from "../../firebase-config";
import { Sensor } from './Seccion/Sensor/Sensor';

class Sensores extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datos: [], maximo: 0, minimo: 0 };
        this.getData = this.getData.bind(this);
        this.maximo = this.maximo.bind(this);
    }

    // Atte: Erick
    getData(coleccion) {
      return new Promise((resolve) => {
      
        let datos = [];
        db.collection(coleccion).onSnapshot((querrySnapshot) => {
          
          querrySnapshot.forEach((doc) => {
            datos.push({ ...doc.data(), id: doc.id });
          });

          this.setState({ datos: datos });
          resolve(true);
        })
      });
    }

    async componentDidMount() {
      await this.getData("Medidas");
      this.maximo();
    }

    maximo() {
      for (let s in this.state.datos) {
        console.log(s);
        console.log("...");
      }
    }

    render() {
        return (
            <div className="Sensores">
                <h3>Cliente 1</h3>
                <div className="Secciones">
                    {
                        DatosSensoresService.map((sens) => {
                            return <Sensor Key={sens.id} nombre={sens.nombre} ultimos30={sens.ultimos10s} max={sens.max} min={sens.min} ubicacion={sens.ubicacion} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Sensores;
