import React from 'react';
import Cita from './Cita'

const Citas = ({citas}) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2>Administra aqui tus citas</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
};

export default Citas;


