import React from 'react';
import styles from './resultados.module.css'
import { Link } from "react-router-dom";
//import {useState} from 'react'
//import { render } from '@testing-library/react';
function Resultados(){

    const datos = JSON.parse(window.localStorage.getItem("datos") || '{}');
    let { value, fee, numQuotas, interestRate } = datos

    let interestPayment=0,capPayment=0,quota=0;

    const cuota = value * (Math.pow(1+interestRate/100,numQuotas)*interestRate/100)/(Math.pow(1+interestRate/100,numQuotas)-1);
    interestPayment = parseFloat(value*(interestRate/100));
    capPayment = cuota-interestPayment;
    value = parseFloat(value-capPayment);
    
    const months = [...Array(parseInt(numQuotas)).keys()].map((item,key)=>{
    
        

        return (
            <div key={key} className={styles.BoxWhite}>
                <h4 className={styles.month}>Mes {item+1}</h4>
                <p> Valor de la cuota</p>
                <span>
                    <b>${cuota.toFixed(2)}</b> COP
                </span>
                <p>Saldo</p>
                <span>
                    {value.toFixed(2)}
                </span>
            </div>
        )
    })

    console.log(months)

    
    return (
        <div className={styles.formBody}>
            <p className={styles.tituloResultado}>Resultado de la simulación</p>

            <div className = {styles.margen}>
                
                <div className={styles.BoxWhite}>
                    <h4 className={styles.month}>¿Qué pagarás?</h4>
                    <p className={styles.titleRes}> Pagarás cuotas de: </p>
                    <span>
                        <p className={styles.resRes}>${cuota.toFixed(2)} COP</p> 
                    </span>
                    <p className={styles.titleRes}>Durante: </p>
                    <span>
                        <p className={styles.resRes}>{numQuotas} meses</p>
                    </span>
                </div>
            </div>
            
            <div className={styles.resultField}>
            <Link to=""><input className={styles.submitButton} type="submit" value="Volver"/></Link>
            </div>
        </div>
        
    );
}

export default Resultados;