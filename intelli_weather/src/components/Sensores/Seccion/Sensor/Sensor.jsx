import React from 'react'

export const Sensor = ({ nombre, ultimos10, max, min, ubicacion }) => {
    return (
        <div className="Sensor">
            <h5>{nombre}</h5>
            <img src="" alt="Sensor" />
            <div className="SensoresDatos">
                <p>Ultimos 10s: {ultimos10}</p>
                <hr />
                <p>Maximo: {max}</p>
                <hr />
                <p>Minimo: {min}</p>
                <hr />
            </div>
            <div className="SensorUbicacion">
                <p>Ubicacion: {ubicacion}</p>
                <hr />
            </div>
        </div>
    )
}
