import React, { useContext, useState } from "react"
import "../estilos/tortugas.css"
import { StoreContext } from "../store/StoreProvider"
import { types } from "../store/storeReducer"
import MonedaIcono from "../svg/MonedaIcono";

export default function Tortugas(){
    const [store, dispatch] = useContext(StoreContext);
    const { misMonedas, monedasApostadas } = store;
    const [ultimoGanado, setUltimoGanado] = useState(0)
    // const [diferenciaUltima, setDiferenciaUltima] = useState(0);
    const [resultadoUltima, setResultadoUltima] = useState('0')
    const [cantidadApuesta, setCantidadApuesta] = useState(10);
    const [apuestaElegida, setApuestaElegida] = useState([false, true, false, false, false]);

    function anteriorPerdido(){return ultimoGanado===1}
    function anteriorGanado(){return ultimoGanado===2}
    function apuestaValidaSuma(apuesta){return apuesta < misMonedas;}
    function apuestaValidaResta(apuesta){return apuesta > 0;}

    function restarApuesta(){
        let diferencia = misMonedas - monedasApostadas
        //                  CAMBIAR CUAL TORTUGA GANA*****
        
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
        //                  CAMBIAR CUAL TORTUGA GANA*****
        
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

    const [corriendo, setCorriendo] = useState(false)
    const [velocidadT1, setVelocidadT1] = useState('')
    const [velocidadT2, setVelocidadT2] = useState('')
    const [velocidadT3, setVelocidadT3] = useState('')

    function generarVelocidad(min, max) {
        // return Math.floor(Math.random() * (max - min + 1) + min);
        return Math.random() * (max - min) + min;
      }
    

    function correr(){
        console.log('vel1: ' + generarVelocidad(1.7,1.75))
        console.log('vel2: ' + generarVelocidad(1.8,1.85))
        console.log('vel3: ' + generarVelocidad(1.9,1.95))
        setVelocidadT1(generarVelocidad(1.7,1.75)+'s')
        setVelocidadT2(generarVelocidad(1.8,1.85)+'s')
        setVelocidadT3(generarVelocidad(1.9,1.95)+'s')


        setCorriendo(true)
        setTimeout(()=>setCorriendo(false), 3000)
        
        return { type: types.actualizarMisMonedas, envio: misMonedas-1 };     
    }


    return(
        <section className="tortugas-seccion" id="Tortugas-Seccion">
            <div className="contenedor-tortugas">
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
                    <button className='boton-tortugas botones-tres boton-apuesta boton-menos' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: restarApuesta() })} disabled={corriendo}>-</button>
                    <div className='cantidad-apuesta'>{ monedasApostadas }</div>
                    <button className='boton-tortugas botones-tres boton-apuesta boton-mas' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: sumarApuesta() })} disabled={corriendo}>+</button>
                </div>
                <div className='cambiar-apuesta'>
                    <button className={`boton-apuesta boton-uno ${apuestaElegida[0] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(1)}>1</button>
                    <button className={`boton-apuesta boton-diez ${apuestaElegida[1] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(10)}>10</button>
                    <button className={`boton-apuesta boton-cincuenta ${apuestaElegida[2] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(50)}>50</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[3] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(100)}>100</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[4] ? 'apuesta-elegida' : ''}`} onClick={ () => cambiarCantidadApuesta(misMonedas)}>todo</button>
                </div>
                <div className="cancha-tortugas">
                    <div className="cancha-tortuga-uno cancha-num">
                        <div className="recorrido-num recorrido-tortuga-uno">
                            <div className={`tortuga-temp tortuga-temp-uno ${corriendo ? `corriendo` : ''} `} style={{animationDuration: `${velocidadT1}`}}></div>
                        </div>
                    </div>
                    <div className="cancha-tortuga-dos cancha-num">
                        <div className="recorrido-num recorrido-tortuga-dos">
                            <div className={`tortuga-temp tortuga-temp-dos ${corriendo ? `corriendo` : ''}`} style={{animationDuration: `${velocidadT2}`}}></div>
                        </div>
                    </div>
                    <div className="cancha-tortuga-tres cancha-num">
                        <div className="recorrido-num recorrido-tortuga-tres">
                            <div className={`tortuga-temp tortuga-temp-tres ${corriendo ? `corriendo` : ''}`} style={{animationDuration: `${velocidadT3}`}}></div>
                        </div>
                    </div>
                </div>
                <div className='contenedor-correr-tortugas'>
                    <button className='boton-tortugas botones-tres boton-correr-tortugas' 
                            onClick={ () => dispatch( correr() ) } 
                            disabled={monedasApostadas === 0 || corriendo}>
                                Correr
                    </button>
                </div>
            </div>
        </section>
    )
}