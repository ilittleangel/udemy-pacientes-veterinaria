import React from 'react';
import uuid from 'uuid';


const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
};

class NuevaCita extends React.Component {
    state = { ...initialState };

    handleChange = (e) => {
        this.setState({
            cita: {
                ...this.state.cita, // esta copia es para no perder los datos
                [e.target.name] : e.target.value } })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // extraer los valores del state
        const { mascota, propietario, fecha, hora } = this.state.cita;

        // validar los campos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '') {
            this.setState({error: true});
            return;
        }

        // generar un UUID
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        // agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita);

        // resetear el state
        this.setState({ ...initialState })
    };

    render() {

        // extraemos el valor del error para mostrar un mensaje de error con bootstrap
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Nueva cita</h2>

                    { error ?
                        <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios
                        </div> : null
                    }

                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Cita</label>

                            <div className="col-sm-5 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <div className="col-sm-3 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Describir sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas} >
                                </textarea>
                            </div>
                        </div>

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Nueva Cita"
                        />

                    </form>

                </div>
            </div>
        )
    }
}

export default NuevaCita;
