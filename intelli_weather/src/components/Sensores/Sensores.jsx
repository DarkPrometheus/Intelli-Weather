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

    async getData(coleccion) {
        let datos = [];
        await db.collection(coleccion)
            .onSnapshot((querrySnapshot) => {
                querrySnapshot.forEach((doc) => {
                    datos.push({ ...doc.data(), id: doc.id });
                })
            })


        console.log("getData");
        console.log(datos);
        this.setState({ datos: datos });
    }

    componentDidMount() {
        this.getData("Medidas");
    }

    maximo() {
        console.log("Antes del ciclo y arreglo");
        console.log(this.state.datos)
        Object.keys(this.state.datos).map(a => {
            console.log(a);
            console.log("...");
        });
        console.log("Despues del ciclo");
    }

    render() {
        console.log("state here");
        console.log(this.state.datos);
        this.maximo();
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