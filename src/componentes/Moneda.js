import '../estilos/moneda.css';
import React, { useState } from 'react';

export default function Moneda(){

    const moneda = {cara: 'CARA', ceca: 'CECA'}

    const [misMonedas, setMisMonedas] = useState(100);
    const [monedasApostadas, setMonedasApostadas] = useState(0);
    const [miEleccionMoneda, setMiEleccionMoneda] = useState(moneda.cara);
    const [seleccion, setSeleccion] = useState(false)
    const [estadoMoneda, setEstadoMoneda] = useState(moneda.cara);

    function cambiarSeleccion(){
        setSeleccion(!seleccion)

        const cara = document.getElementById('Boton-Cara');
        const ceca = document.getElementById('Boton-Ceca')

        cara.addEventListener('click', function(){
            setEstadoMoneda(moneda.cara)
            console.log('caraa')
        });

        ceca.addEventListener('click', function(){
            setEstadoMoneda(moneda.ceca)
            console.log('cecaaa')
        });        
        // miEleccionMoneda === moneda.cara ? setMiEleccionMoneda(moneda.ceca) : setMiEleccionMoneda(moneda.cara)
        // console.log(seleccion)
        console.log(miEleccionMoneda)
    }
    
    function apuestaValidaSuma(apuesta){
        return apuesta < misMonedas;
    }

    function apuestaValidaResta(apuesta){
        return apuesta > 0;
    }

    function restarApuesta(){
        if(apuestaValidaResta(monedasApostadas)){
            setMonedasApostadas(monedasApostadas - 10)
        }
        // console.log(monedasApostadas)
    }

    function sumarApuesta(){
        if(apuestaValidaSuma(monedasApostadas)){
            setMonedasApostadas(monedasApostadas + 10)
        }
        // console.log(monedasApostadas)
    }

    return(
        <section className='moneda-seccion' id='Moneda-Seccion'>
            <div className='contenedor-moneda'>
                <div className='mis-monedas'>Monedas: { misMonedas } (-{ monedasApostadas })</div>
                <div className='apostar'>
                    <button className='boton-moneda boton-apuesta boton-menos' onClick={ () => { restarApuesta() } }>-</button>
                    <div className='cantidad-apuesta'>{ monedasApostadas }</div>
                    <button className='boton-apuesta boton-mas' onClick={ () => { sumarApuesta() } }>+</button>
                </div>
                <div className='estado-moneda'>
                    { estadoMoneda }
                    <div className='elegir'>
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "seleccionado" : ""}`} id='Boton-Cara' onClick={() => { cambiarSeleccion() }}>Cara</button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "" : "seleccionado"}`} id='Boton-Ceca' onClick={() => { cambiarSeleccion() }}>Ceca</button>
                    </div>
                </div>
                <div className='contenedor-lanzar-moneda'>
                    <button className='boton-lanzar-moneda'>Lanzar</button>
                </div>
            </div>
        </section>
    )
}