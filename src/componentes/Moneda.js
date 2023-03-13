import '../estilos/moneda.css';
import React, { useState, useContext } from 'react';
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
    
    const [miEleccionMoneda, setMiEleccionMoneda] = useState(moneda.cara);
    const [seleccion, setSeleccion] = useState(false)
    const [resultadoUltima, setResultadoUltima] = useState('0')
    const [estadoMoneda, setEstadoMoneda] = useState(moneda.cara);
    const [monedaOculta, setMonedaoculta] = useState('');
    // const [girando, setGirando] = useState(false);
    
    const [ultimoGanado, setUltimoGanado] = useState(0);
    const [cantidadApuesta, setCantidadApuesta] = useState(10);
    const [apuestaElegida, setApuestaElegida] = useState([false, true, false, false, false]);
    const [monedasTapadas, setMonedasTapadas] = useState(false);
    const [monedaGiratoria, setMonedaGiratoria] = useState('');
    
    
    window.addEventListener("load", () => {

        document.getElementById('Boton-Cara').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.cara)
        })

        document.getElementById('Boton-Ceca').addEventListener('click', () => {
            setMiEleccionMoneda(moneda.ceca)
        })
    })

    function cambiarSeleccion(){setSeleccion(!seleccion); return { type: types.actualizarApostadas, envio: 0}}
    function anteriorPerdido(){return ultimoGanado===1}
    function anteriorGanado(){return ultimoGanado===2}
    function apuestaValidaSuma(apuesta){return apuesta < misMonedas;}
    function apuestaValidaResta(apuesta){return apuesta > 0;}
    function salioCara(){return monedaOculta === moneda.cara;}
    function salioCeca(){return monedaOculta === moneda.ceca;}
    
    
    function restarApuesta(){
        girarMoneda();
        
        if(apuestaValidaResta(monedasApostadas)){
            let aRetornar = monedasApostadas - cantidadApuesta
            return aRetornar < 0 ? 0 : aRetornar;
        }
        
        else {
            return monedasApostadas;
        }
    }

    function sumarApuesta(){
        let diferencia = misMonedas - monedasApostadas
        girarMoneda();
        
        if(apuestaValidaSuma(monedasApostadas) && diferencia >= cantidadApuesta){
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
        let azar = Math.random();
        azar >= 0 && azar < 0.5 ? setMonedaoculta(moneda.cara) : setMonedaoculta(moneda.ceca);
        if(azar === 'no warning'){
            azar = estadoMoneda;
        }
    }

    function animacionGiroMoneda(){
        
        if(salioCara() && monedaGiratoria !== 'salio-cara'){
            setMonedaGiratoria('salio-cara')
        }
        if(salioCara() && monedaGiratoria === 'salio-cara'){
            setMonedaGiratoria('salio-cara2')
        }
        if(salioCeca() && monedaGiratoria !== 'salio-ceca'){
            setMonedaGiratoria('salio-ceca')
        }
        if(salioCeca() && monedaGiratoria === 'salio-ceca'){
            setMonedaGiratoria('salio-ceca2')
        }
    }
    
    function lanzar(){
        let monedasAenviar = misMonedas;
        
        if(monedaOculta === miEleccionMoneda){
            monedasAenviar += monedasApostadas
            setTimeout(()=>setResultadoUltima('+'+monedasApostadas), 2000)
            setTimeout(()=>setUltimoGanado(2), 2000)
        } else {
            monedasAenviar -= monedasApostadas
            setTimeout(()=>setResultadoUltima('-'+monedasApostadas), 2000)
            setTimeout(()=>setUltimoGanado(1), 2000)
        }

        setMonedasTapadas(true)
        setTimeout(()=>setMonedasTapadas(false), 2000)
        animacionGiroMoneda()
        setEstadoMoneda(monedaOculta);
        
        return { type: types.actualizarMisMonedas, envio: monedasAenviar };
    }

    return(
        <section className='moneda-seccion' id='Moneda-Seccion' style={{display: componenteMoneda}}>
            <BarraJuegos />
            <div className='contenedor-moneda'>
                <div className={`mis-monedas ${monedasTapadas && `monedas-tapadas`}`}>
                    <div className='contenedor-icono-moneda'>
                        <MonedaIcono />
                    </div>
                    <div className='contenedor-info-mis-monedas'>
                        { misMonedas } (-{ monedasApostadas })
                    </div>
                </div>
                <div className='ultima-apuesta'>
                    Última apuesta: <span className={`${anteriorGanado() ? "anterior-ganado-moneda" : ""} ${anteriorPerdido() ? "anterior-perdido-moneda" : ""}`}>{ resultadoUltima }</span>
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
                    <div className='estado-moneda-actual gira-moneda-tamanio'>
                        {/* { girando ? 'GIRANDO' : estadoMoneda } */}
                        <MonedaGirando id='Moneda-Giro' tamanio={tamanioMonedasGirando} className={monedaGiratoria}/>
                    </div>
                    <div className='elegir'>
                        <button className={`boton-moneda boton-elegir boton-cara ${seleccion ? "" : "seleccionado"}`} disabled={!seleccion} id='Boton-Cara' onClick={() => dispatch(cambiarSeleccion())}>
                            {/* Cara */}
                            <MonedaElegirCara tamanio={tamanioMonedasElegir}/>
                        </button>
                        <button className={`boton-moneda boton-elegir boton-ceca ${seleccion ? "seleccionado" : ""}`} disabled={seleccion} id='Boton-Ceca' onClick={() => dispatch(cambiarSeleccion())}>
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
                
            </div>
        </section>
    )
}