import '../estilos/moneda.css';
import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';
import MonedaIcono from '../svg/MonedaIcono.js';

export default function Moneda(){
    
    const moneda = {cara: 'CARA', ceca: 'CECA', girando: 'GIRANDO'}

    const [store, dispatch] = useContext(StoreContext);
    const {misMonedas, monedasApostadas} = store;
    const [monedaOculta, setMonedaoculta] = useState('')
    //const [apostadasOcultas, setApostadasOcultas] = useState(0)
    //↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓↑↓
    // const [misMonedas2, setMisMonedas] = useState(100);
    // const [monedasApostadas2, setMonedasApostadas] = useState(0);

    const [ultimaApuesta, setUltimaApuesta] = useState(0);
    const [resultadoUltima, setResultadoUltima] = useState('0')
    const [miEleccionMoneda, setMiEleccionMoneda] = useState(moneda.cara);
    const [seleccion, setSeleccion] = useState(false)
    const [estadoMoneda, setEstadoMoneda] = useState(moneda.cara);
    const [girando, setGirando] = useState(false);
    // const [diferenciaUltima, setDiferenciaUltima] = useState(0);
    const [ultimoGanado, setUltimoGanado] = useState(0);
    const [cantidadApuesta, setCantidadApuesta] = useState(10);
    const [apuestaElegida, setApuestaElegida] = useState([false, true, false, false, false]);
    
    
    window.addEventListener("load", () => {

        document.getElementById('Boton-Cara').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.cara)
        })

        document.getElementById('Boton-Ceca').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.ceca)
        })
    })

    function cambiarSeleccion(){setSeleccion(!seleccion)}
    function anteriorPerdido(){return ultimoGanado===1}
    function anteriorGanado(){return ultimoGanado===2}
    function apuestaValidaSuma(apuesta){return apuesta < misMonedas;}
    function apuestaValidaResta(apuesta){return apuesta > 0;}

    
    function restarApuesta(){
        let diferencia = misMonedas - monedasApostadas
        girarMoneda();
        
        if(apuestaValidaResta(monedasApostadas)){
            // setMonedasApostadas(monedasApostadas - 10);
            let aRetornar = monedasApostadas - cantidadApuesta
            return aRetornar < 0 ? 0 : aRetornar;
        }
        // else if(apuestaValidaResta(monedasApostadas) && diferencia < cantidadApuesta){
        //     // ACA ESTÁ EL TEMA DE RESTAR CUANDO LA DIFERENCIA ULTIMA BLA BLA BLA
        //     return monedasApostadas - diferenciaUltima;
        // }
        else {
            return monedasApostadas;
        }
    }

    function sumarApuesta(){
        let diferencia = misMonedas - monedasApostadas
        girarMoneda();
        // setDiferenciaUltima(diferencia)
        // if(diferencia !== 0){
        //     setDiferenciaUltima(diferencia)
        // }
        if(apuestaValidaSuma(monedasApostadas) && diferencia >= cantidadApuesta){
            // setMonedasApostadas(monedasApostadas + 10);
            return monedasApostadas + cantidadApuesta;
        }
        else if(apuestaValidaSuma(monedasApostadas) && diferencia < cantidadApuesta){
            return monedasApostadas + diferencia;
        }
        else{
            return monedasApostadas;
        }
    }
    
    
    function cambiarCantidadApuesta(cantidad){
        setCantidadApuesta(cantidad);
        if (cantidad === 1){
            setApuestaElegida([true, false, false, false, false]);
        }
        if (cantidad === 10){
            setApuestaElegida([false, true, false,false, false]);
        }
        if (cantidad === 50){
            setApuestaElegida([false, false, true, false, false]);
        }
        if (cantidad === 100){
            setApuestaElegida([false, false, false, true, false]);
        }
        if (cantidad === misMonedas){
            setApuestaElegida([false, false, false, false, true]);
        }
    }
    
    function girarMoneda(){
        // return new Promise((resolve, reject) => {
        //     let azar = Math.random();
        //     if (azar >= 0 && azar < 0.5) {
        //       setEstadoMoneda(moneda.cara);
        //       resolve(moneda.cara);
        //     } else {
        //       setEstadoMoneda(moneda.ceca);
        //       reject('UPS')
        //       resolve(moneda.ceca);
        //     }
        //   });
        let azar = Math.random();
        azar >= 0 && azar < 0.5 ? setMonedaoculta(moneda.cara) : setMonedaoculta(moneda.ceca);
        // azar >= 0 && azar < 0.5 ? setEstadoMoneda(moneda.cara) : setEstadoMoneda(moneda.ceca);
    }
    
    function lanzar(){
        let monedasAenviar = misMonedas // lanzar();
        // girarMoneda().then((mon)=>{ mon === miEleccionMoneda ? console.log('SI') : console.log('NO') })
        // .then(()=>{})

        if(monedaOculta === miEleccionMoneda){
            monedasAenviar += monedasApostadas
            setResultadoUltima('+'+monedasApostadas)
            setUltimoGanado(2)
            console.log('GANASTE')
        } else {
            monedasAenviar -= monedasApostadas
            setResultadoUltima('-'+monedasApostadas)
            setUltimoGanado(1)
            console.log('PERDISTE')
        }
        
        setEstadoMoneda(monedaOculta)
        console.log(monedaOculta)
        
        return { type: types.actualizarMisMonedas, envio: monedasAenviar };
    
        
    }

    return(
        <section className='moneda-seccion' id='Moneda-Seccion'>
            <div className='contenedor-moneda'>
                <div className='mis-monedas'>
                    <div className='contenedor-icono-moneda'>
                        <MonedaIcono />
                    </div>
                    <div className='contenedor-info-mis-monedas'>
                        { misMonedas } (-{ monedasApostadas })
                    </div>
                </div>
                <div className='ultima-apuesta'>
                    Última apuesta: <span className={`${anteriorGanado() ? "anterior-ganado" : ""} ${anteriorPerdido() ? "anterior-perdido" : ""}`}>{ resultadoUltima }</span>
                </div>
                <div className='apostar'>
                    <button className='boton-moneda botones-tres boton-apuesta boton-menos' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: restarApuesta() })}>-</button>
                    <div className='cantidad-apuesta'>{ monedasApostadas }</div>
                    <button className='boton-moneda botones-tres boton-apuesta boton-mas' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: sumarApuesta() })}>+</button>
                </div>
                <div className='cambiar-apuesta'>
                    <button className={`boton-apuesta boton-uno ${apuestaElegida[0] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(1)}>1</button>
                    <button className={`boton-apuesta boton-diez ${apuestaElegida[1] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(10)}>10</button>
                    <button className={`boton-apuesta boton-cincuenta ${apuestaElegida[2] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(50)}>50</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[3] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(100)}>100</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[4] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(misMonedas)}>todo</button>
                </div>
                <div className='estado-moneda'>
                    { girando ? 'GIRANDO' : estadoMoneda }
                    <div className='elegir'>
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "" : "seleccionado"}`} disabled={!seleccion} id='Boton-Cara' onClick={() => { cambiarSeleccion() }}>Cara</button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "seleccionado" : ""}`} disabled={seleccion} id='Boton-Ceca' onClick={() => { cambiarSeleccion() }}>Ceca</button>
                    </div>
                </div>
                <div className='contenedor-lanzar-moneda'>
                    <button className='boton-moneda botones-tres boton-lanzar-moneda' 
                            onClick={ () => dispatch( lanzar() ) } 
                            disabled={monedasApostadas === 0}>
                                Lanzar
                    </button>
                </div>
                    {/* <img src={moneda_icono} alt='Monedas'></img> */}
                {/*
                <div>
                    Numero De prueba: { numeroDePrueba }
                </div>

                 <button onClick={ () => dispatch({ type: types.restarPrueba, envio: numeroDePrueba-1})}>-</button>
                <button onClick={ () => dispatch({ type: types.sumarPrueba, envio: numeroDePrueba+1})}>+</button>
                 */}
            </div>
        </section>
    )
}