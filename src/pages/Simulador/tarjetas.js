import React from 'react';
import styles from './tarjetas.module.css'
import { Link } from "react-router-dom";

function Tarjetas() {

    return (
  
            <div className={styles.container}>
                
                <div className={styles.title}>
                Tarjetas disponibles para el simulador
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.text1}>
                        <p className={styles.textAm}>Tarjeta amarilla:</p>
                        <p>La característica principal de esta tarjeta es que contiene un 15% de descuento de frutas y verduras</p>
                        <ul>
                            <li><strong>Tasa de interes mensual: </strong> 2,5%</li>
                            <li><strong>Cuota de manejo mensual: </strong> 10.000</li>
                        </ul>
                        <div class={styles.simulatorField}>
                            <Link to="/simulador-tarjeta-amarilla"><input class={styles.submitButtonTarjetaAmarilla} type="submit" value="Ir al simulador"/></Link>
                        </div>
                    </div>
                    <div className={styles.img1}>
                        <img src={require("../../assets/img/Tarjeta-amarilla.jpg")} alt=""/>
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.img2}>
                        <img src={require("../../assets/img/Tarjeta-azul.png")} alt=""/>
                    </div>

                    <div className={styles.text2}>
                        <p className={styles.textAz}>Tarjeta azul:</p>
                        <p>La característica principal de esta tarjeta que contiene un 10% de descuento en la compra
                            de vuelos y ticketes aéreos.
                        </p>
                        <ul>
                            <li><strong>Tasa de interes mensual: </strong> 3,3%</li>
                            <li><strong>Cuota de manejo mensual: </strong> 12.000</li>
                        </ul>
                        <div class={styles.simulatorField}>
                            <Link to="/simulador-tarjeta-azul"><input class={styles.submitButtonTarjetaAzul} type="submit" value="Ir al simulador"/></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.text1}>
                        <p className={styles.textV}>Tarjeta verde:</p>
                        <p>La característica principal de esta tarjeta es que contiene un 5% de descuento en compras en ropa</p>
                        <ul>
                            <li><strong>Tasa de interes mensual: </strong> 2,8%</li>
                            <li><strong>Cuota de manejo mensual: </strong> 8.000</li>
                        </ul>
                        <div class={styles.simulatorField}>
                            <Link to="/simulador-tarjeta-verde"><input class={styles.submitButtonTarjetaVerde} type="submit" value="Ir al simulador"/></Link>
                        </div>
                    </div>
                    <div className={styles.img1}>
                        <img src={require("../../assets/img/Tarjeta-verde.jpg")} alt=""/>
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.img2}>
                        <img src={require("../../assets/img/Tarjeta-roja.jpg")} alt=""/>
                    </div>

                    <div className={styles.text2}>
                        <p className={styles.textR}>Tarjeta roja:</p>
                        <p>La característica principal de esta tarjeta que contiene un 10% de descuento en la compra
                           electrodomésticos y muebles para el hogar.
                        </p>
                        <ul>
                            <li><strong>Tasa de interes mensual: </strong> 3,0%</li>
                            <li><strong>Cuota de manejo mensual: </strong> 15.000</li>
                        </ul>
                        <div class={styles.simulatorField}>
                            <Link to="/simulador-tarjeta-roja"><input class={styles.submitButtonTarjetaRoja} type="submit" value="Ir al simulador"/></Link>
                        </div>
                    </div>
                </div>

                <div class={styles.simulatorField}>
                    <Link to="/simulador"><input class={styles.submitButton} type="submit" value="Ir al simulador"/></Link>
                </div>

            </div>

            
        
    );
}

export default Tarjetas;