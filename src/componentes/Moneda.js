import '../estilos/moneda.css';
import React, { useState, useEffect } from 'react';

export default function Moneda(){

    const moneda = {cara: 'CARA', ceca: 'CECA', girando: 'GIRANDO'}

    const [misMonedas, setMisMonedas] = useState(100);
    const [monedasApostadas, setMonedasApostadas] = useState(0);
    const [miEleccionMoneda, setMiEleccionMoneda] = useState(moneda.cara);
    const [seleccion, setSeleccion] = useState(false)
    const [estadoMoneda, setEstadoMoneda] = useState(moneda.cara);
    const [girando, setGirando] = useState(false)
    
    
    window.addEventListener("load", () => {

        document.getElementById('Boton-Cara').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.cara)
        })

        document.getElementById('Boton-Ceca').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.ceca)
        })
    })

    function cambiarSeleccion(){
        setSeleccion(!seleccion)
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


    
    // useEffect( () => {

        
    //     // let tiempo = setTimeout(()=>{}, 1000)
    //     if(estadoMoneda === miEleccionMoneda){
    //         setMisMonedas(misMonedas + monedasApostadas)
    //         console.log('GANASTE')
    //     } else {
    //         setMisMonedas(misMonedas - monedasApostadas)
    //         console.log('PERDISTE')
    //     }
    //     setMonedasApostadas(0)
    //     console.log('Use Effect Moneda: ' + estadoMoneda)

    //     return () => {
    //         let azar = Math.random();
    //         azar >= 0 && azar < 0.5 ? setEstadoMoneda(moneda.cara) : setEstadoMoneda(moneda.ceca);
    //         console.log('EN RETURN')
    //     }

    //     // return () => {
    //     //     clearTimeout(tiempo)
    //     // }

    // }, [girando])

    function girarMoneda(){
        let azar = Math.random();
        azar >= 0 && azar < 0.5 ? setEstadoMoneda(moneda.cara) : setEstadoMoneda(moneda.ceca);
    }

    useEffect( () => {
        // Este if es evitable
        if(girando){
            if(estadoMoneda === miEleccionMoneda){
                setMisMonedas(misMonedas + monedasApostadas)
                console.log('GANASTE')
            } else {
                setMisMonedas(misMonedas - monedasApostadas)
                console.log('PERDISTE')
            }
            setMonedasApostadas(0)
            setGirando(false)
        }
    }, [girando])


    function lanzar(){

        girarMoneda();

        setGirando(true);
        
        // setTimeout(()=>{console.log('Pasó un segundo')}, 1000)
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
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "" : "seleccionado"}`} disabled={!seleccion} id='Boton-Cara' onClick={() => { cambiarSeleccion() }}>Cara</button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "seleccionado" : ""}`} disabled={seleccion} id='Boton-Ceca' onClick={() => { cambiarSeleccion() }}>Ceca</button>
                    </div>
                </div>
                <div className='contenedor-lanzar-moneda'>
                    <button className='boton-lanzar-moneda' onClick={ () => { lanzar() } }>Lanzar</button>
                </div>
                    <div>{miEleccionMoneda}</div>
            </div>
        </section>
    )
}