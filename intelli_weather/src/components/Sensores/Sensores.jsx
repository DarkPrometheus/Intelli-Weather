import React from 'react'
import "../../css/Sensores.css"
import { DatosSensoresService } from '../../services/DatosSensoresService';
import { Seccion } from './Seccion/Seccion';

export const Sensores = () => {
    return (
        <div className="Sensores">
            <h3>Cliente 1</h3>
            <div className="Secciones">
                <Seccion Title={"Seccion 1"} data={DatosSensoresService} />
                <Seccion Title={"Seccion 2"} data={DatosSensoresService} />
                <Seccion Title={"Seccion 3"} data={DatosSensoresService} />
            </div>
        </div>
    )
}
