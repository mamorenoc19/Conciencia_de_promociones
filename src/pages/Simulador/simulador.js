import React from 'react';
import styles from './simulador.module.css'
import { Link} from "react-router-dom";
import { useHistory} from "react-router-dom";
import {useState} from 'react'

function Simulador(){

    const [value, setValue] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [fee, setFee] = useState("");
    const [numQuotas, setNumQuotas] = useState("");
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {value,interestRate,fee,numQuotas};
        localStorage.setItem("datos",JSON.stringify(blog));
        history.push('/resultados');
    }
    

    return (
        <div className={styles.formBody}>
        <p className={styles.tituloSimulador}>Simulador de cuotas</p>

        <form className={styles.simulatorForm} onSubmit={handleSubmit}>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Valor de la compra</label>
                <input type="text" required id="fname" name="value" placeholder="Ingrese el valor de su compra"
                value={value} onChange={(e)=>setValue(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Tasa de interés</label>
                <input type="text" required id="fname" name="interestRate" placeholder="Ingrese la tasa de interés"
                value={interestRate} onChange={(e)=>setInterestRate(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Cuota de manejo</label>
                <input type="text" required id="fname" name="fee" placeholder="Ingrese el valor de la cuota de manejo"
                value={fee} onChange={(e)=>setFee(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Nro. de cuotas</label>
                <input type="text" required id="fname" name="numQuotas" placeholder="Ingrese el número de cuotas"
                value={numQuotas} onChange={(e)=>setNumQuotas(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>

                <a href="#resultados"><input className={styles.submitButton} type="submit" value="Realizar simulación"/></a>
                <Link to="/instructivo"><input className={styles.instButton} type="submit" value="Instructivo"/></Link>

            </div>

          </form>
        </div>
    );
}

export default Simulador;