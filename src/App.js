import React from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import Citas from './components/Citas'


class App extends React.Component {
  state = {
      citas: []
  };

  crearNuevaCita = (datos) => {
      // hacemos la copia obligatoria del state.citas
      // y le añadirmos las nueva cita que es datos
      const citas = [...this.state.citas, datos];

      // añadirmos todas las citas al state
      this.setState({
          citas
      });
  };

  eliminarCita = (citaId) => {
      console.log(`borrando cita con id: ${citaId}`);

      // hacer la copia del state que contiene la lista de citas
      const citasActuales = [...this.state.citas];

      // borramos la cita del state copiado. Devolvemos todas las citas menos la del id
      const citas = citasActuales.filter(cita => cita.id !== citaId);

      // asigamos la copia al state
      this.setState({
          citas
      })


  };

  render() {
    return (
        <div className="container">
          <Header titulo='Administrador Veterinaria'/>

          <div className="row">

              <div className="col-md-10 mx-auto">
                  <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
              </div>

              <div className="mt-5 col-md-10 mx-auto">
                  <Citas
                      citas={this.state.citas}
                      eliminarCita={this.eliminarCita}
                  />
              </div>

          </div>
        </div>
    );
  }

}

export default App;
