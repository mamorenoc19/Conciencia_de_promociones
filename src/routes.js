import React from 'react';
import NavBar from './components/NavBar/navbar';
import Simulador from './pages/Simulador/simulador';
import Instructivo from './pages/Instructivo/instructivo';
import Inicio from './pages/Inicio/inicio';
import Resultados from './pages/Simulador/resultados';
import Tarjetas from './pages/Simulador/tarjetas';
import SimuladorTarjetaAmarilla from './pages/Simulador/SimuladorTarjetaAmarilla/simulador-tarjeta-amarilla';
import SimuladorTarjetaAzul from './pages/Simulador/SimuladorTarjetaAzul/simulador-tarjeta-azul';
import SimuladorTarjetaVerde from './pages/Simulador/SimuladorTarjetaVerde/simulador-tarjeta-verde';
import SimuladorTarjetaRoja from './pages/Simulador/SimuladorTarjetaRoja/simulador-tarjeta-roja';
import ResultadosTarjetaAmarilla from './pages/Simulador/SimuladorTarjetaAmarilla/resultado-tarjeta-amarilla';
import ResultadosTarjetaAzul from './pages/Simulador/SimuladorTarjetaAzul/resultado-tarjeta-azul';
import ResultadosTarjetaVerde from './pages/Simulador/SimuladorTarjetaVerde/resultado-tarjeta-verde';
import ResultadosTarjetaRoja from './pages/Simulador/SimuladorTarjetaRoja/resultado-tarjeta-roja';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function Routes(){
    return (
        <Router>
          <div>
            
            <NavBar/>

            <Switch>

            <Route exact path="/simulador">
                <Simulador />
            </Route>

            <Route exact path="/simulador-tarjeta-amarilla">
                <SimuladorTarjetaAmarilla />
            </Route>

            <Route exact path="/simulador-tarjeta-azul">
                <SimuladorTarjetaAzul />
            </Route>

            <Route exact path="/simulador-tarjeta-roja">
                <SimuladorTarjetaRoja/>
            </Route>

            <Route exact path="/simulador-tarjeta-verde">
                <SimuladorTarjetaVerde />
            </Route>

            <Route exact path="/resultados">
                <Resultados />
            </Route>

            <Route exact path="/resultado-tarjeta-amarilla">
                <ResultadosTarjetaAmarilla />
            </Route>

            <Route exact path="/resultado-tarjeta-azul">
                <ResultadosTarjetaAzul />
            </Route>

            <Route exact path="/resultado-tarjeta-roja">
                <ResultadosTarjetaRoja />
            </Route>

            <Route exact path="/resultado-tarjeta-verde">
                <ResultadosTarjetaVerde />
            </Route>

            <Route exact path="/instructivo">
                <Instructivo/>
            </Route>

            <Route exact path="/tarjetas">
                <Tarjetas/>
            </Route>

            <Route exact path="/nosotros">
                Acá va nosotros
            </Route>

            <Route exact path="/">
              <Inicio/>
            </Route>

            </Switch>

          </div>
        </Router>
      );
}

export {Routes}