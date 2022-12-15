import '../estilos/moneda.css';
import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

export default function Moneda(){

    const [store, dispatch] = useContext(StoreContext);
    const { numeroDePrueba } = store;

    const moneda = {cara: 'CARA', ceca: 'CECA', girando: 'GIRANDO'}

    const [misMonedas, setMisMonedas] = useState(100);
    const [monedasApostadas, setMonedasApostadas] = useState(0);
    const [ultimaApuesta, setUltimaApuesta] = useState(0);
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
            let resultado = 0;
            if(estadoMoneda === miEleccionMoneda){
                setMisMonedas(misMonedas + monedasApostadas)
                resultado = monedasApostadas
                console.log('GANASTE')
            } else {
                setMisMonedas(misMonedas - monedasApostadas)
                resultado = monedasApostadas * -1
                console.log('PERDISTE')
            }
            setMonedasApostadas(0)
            setGirando(false)
            setUltimaApuesta(resultado)
        }
    }, [girando, estadoMoneda, miEleccionMoneda, misMonedas, monedasApostadas])
    // Solo "girando" es necesario, pero con los otros se evita un warning (por las dependencias de useEffect)


    function lanzar(){

        girarMoneda();

        setGirando(true);
        
        // setTimeout(()=>{console.log('Pasó un segundo')}, 1000)
    }

    return(
        <section className='moneda-seccion' id='Moneda-Seccion'>
            <div className='contenedor-moneda'>
                <div className='mis-monedas'>Monedas: { misMonedas } (-{ monedasApostadas })</div>
                <div className='ultima-apuesta'>Última apuesta: { ultimaApuesta }</div>
                <div className='apostar'>
                    <button className='boton-moneda botones-tres boton-apuesta boton-menos' onClick={ () => { restarApuesta() } }>-</button>
                    <div className='cantidad-apuesta'>{ monedasApostadas }</div>
                    <button className='boton-moneda botones-tres boton-apuesta boton-mas' onClick={ () => { sumarApuesta() } }>+</button>
                </div>
                <div className='estado-moneda'>
                    { estadoMoneda }
                    <div className='elegir'>
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "" : "seleccionado"}`} disabled={!seleccion} id='Boton-Cara' onClick={() => { cambiarSeleccion() }}>Cara</button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "seleccionado" : ""}`} disabled={seleccion} id='Boton-Ceca' onClick={() => { cambiarSeleccion() }}>Ceca</button>
                    </div>
                </div>
                <div className='contenedor-lanzar-moneda'>
                    <button className='boton-moneda botones-tres boton-lanzar-moneda' onClick={ () => { lanzar() } } disabled={monedasApostadas === 0}>Lanzar</button>
                </div>

                <div>
                    Numero De prueba: { numeroDePrueba }
                </div>

                <button onClick={ () => dispatch({ type: types.restarPrueba, envio: numeroDePrueba-1})}>-</button>
                <button onClick={ () => dispatch({ type: types.sumarPrueba, envio: numeroDePrueba+1})}>+</button>
            </div>
        </section>
    )
}