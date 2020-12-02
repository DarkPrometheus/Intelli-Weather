import React from 'react'
import { Sensor } from './Sensor/Sensor';

export const Seccion = ({ Title, data }) => {
    return (
        <div className="Seccion">
            <h4>{Title}</h4>
            <div className="SeccionSensores">
                {
                    data.map((sens) => {
                        return <Sensor Key={sens.id} nombre={sens.nombre} ultimos10={sens.ultimos10s} max={sens.max} min={sens.min} ubicacion={sens.ubicacion} />
                    })
                }
            </div>
        </div>
    )
}
