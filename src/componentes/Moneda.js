import '../estilos/moneda.css';
import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';
import MonedaIcono from '../svg/MonedaIcono.js';
import MonedaElegirCara from '../svg/MonedaElegirCara';
import MonedaElegirCeca from '../svg/MonedaElegirCeca';
import BarraJuegos from './BarraJuegos';
import MonedaGirando from '../svg/MonedaGirando';

export default function Moneda(){
    
    const moneda = {cara: 'CARA', ceca: 'CECA', girando: 'GIRANDO'}
    const tamanioMonedasElegir = '60'
    const tamanioMonedasGirando = '160'

    const [store, dispatch] = useContext(StoreContext);
    const {misMonedas, monedasApostadas, componenteMoneda} = store;
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
    const [cara1, setCara1] = useState(false)
    
    
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
    function salioCara(){return monedaOculta === moneda.cara;}
    function salioCeca(){return monedaOculta === moneda.ceca;}

    //ESTO SE VA, HAY QUE ENCONTRAR OTRA FORMA DE HACERLO, EL PROBLEMA ES QUE EL ULTIMO RESULTADO SALE MUY PRONTO
    // function ultimoResultado(){
    //     const ultimo = setTimeout(()=>{return resultadoUltima}, 2000);
    //     return new Promise((res, rej) => {
    //         setTimeout(()=>{
    //             const ultimo = resultadoUltima;
    //             res(ultimo)
    //         }, 2000)
    //     });
    // }
    // async function imprimirUltimoResultado(){
    //     const resTemp = await ultimoResultado();
    //     return resTemp;
    // }
    
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
        console.log(salioCara())
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

    const [monedaGiratoria, setMonedaGiratoria] = useState('')

    function animacionGiroMoneda(){
        // const resTemp = salioCara() ? 'salio-cara' : 'salio-ceca';
        // let caraUno = true
        if(salioCara() && monedaGiratoria !== 'salio-cara'){
            // setCara1(true);
            // return 'salio-cara';
            setMonedaGiratoria('salio-cara')
            console.log('SALIO CARA')
        }
        if(salioCara() && monedaGiratoria === 'salio-cara'){
            setMonedaGiratoria('salio-cara2')
            console.log('SALIO CARA2')
        }
        if(salioCeca() && monedaGiratoria !== 'salio-ceca'){
            setMonedaGiratoria('salio-ceca')
            console.log('SALIO CECA')
        }
        if(salioCeca() && monedaGiratoria === 'salio-ceca'){
            setMonedaGiratoria('salio-ceca2')
            console.log('SALIO CECA2')
        }
        // else{
        //     resTemp = 'salio-ceca'
        // }

        // return resTemp;
        // return salioCara() ? 'salio-cara' : 'salio-ceca'
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

        animacionGiroMoneda()
        setEstadoMoneda(monedaOculta);
        console.log(monedaOculta);
        
        return { type: types.actualizarMisMonedas, envio: monedasAenviar };
    
        
    }

    return(
        <section className='moneda-seccion' id='Moneda-Seccion' style={{display: componenteMoneda}}>
            <BarraJuegos />
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
                <div className='cambiar-apuesta-moneda'>
                    <button className={`boton-apuesta boton-uno ${apuestaElegida[0] ? 'apuesta-elegida-moneda' : ''}`} onClick={ () => cambiarCantidadApuesta(1)}>1</button>
                    <button className={`boton-apuesta boton-diez ${apuestaElegida[1] ? 'apuesta-elegida-moneda' : ''}`} onClick={ () => cambiarCantidadApuesta(10)}>10</button>
                    <button className={`boton-apuesta boton-cincuenta ${apuestaElegida[2] ? 'apuesta-elegida-moneda' : ''}`} onClick={ () => cambiarCantidadApuesta(50)}>50</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[3] ? 'apuesta-elegida-moneda' : ''}`} onClick={ () => cambiarCantidadApuesta(100)}>100</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[4] ? 'apuesta-elegida-moneda' : ''}`} onClick={ () => cambiarCantidadApuesta(misMonedas)}>todo</button>
                </div>
                <div className='estado-moneda'>
                    <div className='estado-moneda-actual gira-moneda-tamanio'> {/* className='estado-moneda-actual gira-moneda-tamanio' */}
                        {/* { girando ? 'GIRANDO' : estadoMoneda } */}
                        <MonedaGirando id='Moneda-Giro' tamanio={tamanioMonedasGirando} className={monedaGiratoria}/>
                    </div>
                    <div className='elegir'>
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "" : "seleccionado"}`} disabled={!seleccion} id='Boton-Cara' onClick={() => { cambiarSeleccion() }}>
                            {/* Cara */}
                            <MonedaElegirCara tamanio={tamanioMonedasElegir}/>
                        </button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "seleccionado" : ""}`} disabled={seleccion} id='Boton-Ceca' onClick={() => { cambiarSeleccion() }}>
                            {/* Ceca */}
                            <MonedaElegirCeca tamanio={tamanioMonedasElegir}/>
                        </button>
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