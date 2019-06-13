import React from 'react';
import Cita from './Cita'
import PropTypes from 'prop-types';


const Citas = ({citas, eliminarCita}) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2>Administra aqui tus citas</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
};

Citas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
};

export default Citas;


