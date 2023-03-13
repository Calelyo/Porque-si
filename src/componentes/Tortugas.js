import "../estilos/tortugas.css"
import React, { useContext, useState, useEffect } from "react"
import { StoreContext } from "../store/StoreProvider"
import { types } from "../store/storeReducer"
import MonedaIcono from "../svg/MonedaIcono";
import Tortuga from "../svg/Tortuga";
import pista from "../img/pista.jpg"
import BarraJuegos from "./BarraJuegos";
import MonedasJustasModal from "./MonedasJustasModal";
import { useModal } from "../hooks/useModal";

export default function Tortugas(){
    // const tamanioTortugas = window.innerWidth.toString()*0.07;
    const tamanioTortugas = '100'
    const colorCaparazonesDentro = ['#81983A', '#A48A7B', '#CA9E67']
    const colorCaparazonesFuera = ['#00983A', '#DB8B00', '#683C11']
    const colorTransparente = '#ffffff00'

    const [store, dispatch] = useContext(StoreContext);
    const { misMonedas, monedasApostadas, componenteTortugas, tortugasCompradas } = store;
    const [ultimoGanado, setUltimoGanado] = useState(0)
    
    const [resultadoUltima, setResultadoUltima] = useState('0')
    const [cantidadApuesta, setCantidadApuesta] = useState(10);
    const [apuestaElegida, setApuestaElegida] = useState([false, true, false, false, false]);
    
    const [velocidadTotugaGanadora, setVelocidadTotugaGanadora] = useState(0)
    const [monedasTapadas, setMonedasTapadas] = useState(false) 
    const [modalAbiertoMonedasJustas, abrirModalMonedasJustas, cerrarModalMonedasJustas] = useModal(false)

    const [corriendo, setCorriendo] = useState(false)
    const [velocidadT1, setVelocidadT1] = useState('')
    const [velocidadT2, setVelocidadT2] = useState('')
    const [velocidadT3, setVelocidadT3] = useState('')

    const [tortugas, setTortugas] = useState([{
        id: 0,
        nombre: 'Tortuga1',
        elegida: true,
        ganadora: false,
        velocidad: velocidadT1
    },
    {
        id: 1,
        nombre: 'Tortuga2',
        elegida: false,
        ganadora: false,
        velocidad: velocidadT2
    },
    {
        id: 2,
        nombre: 'Tortuga3',
        elegida: false,
        ganadora: false,
        velocidad: velocidadT3
    }]
    )

    function anteriorPerdido(){return ultimoGanado===1}
    function anteriorGanado(){return ultimoGanado===2}
    function apuestaValidaSuma(apuesta){return apuesta < misMonedas;}
    function apuestaValidaResta(apuesta){return apuesta > 0;}

    function restarApuesta(){
        
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
        
        const velocidades = [generarVelocidad(1.7,1.75), generarVelocidad(1.8,1.85), (generarVelocidad(1.9,1.95))];
        // FUNCIONA PERO REPITE VELOCIDADES 
        // const velocidad1 = velocidades[Math.floor(Math.random() * velocidades.length)];
        // const velocidad2 = velocidades[Math.floor(Math.random() * velocidades.length)];
        // const velocidad3 = velocidades[Math.floor(Math.random() * velocidades.length)];
        const velocidadesNumericas = velocidades.map(velocidad => parseFloat(velocidad));
        const tortugaGanadora = Math.min(...velocidadesNumericas);
        setVelocidadTotugaGanadora(tortugaGanadora)

        const velocidad1 = velocidades.splice(Math.floor(Math.random() * velocidades.length), 1)[0];
        const velocidad2 = velocidades.splice(Math.floor(Math.random() * velocidades.length), 1)[0];
        const velocidad3 = velocidades[0];

        setVelocidadT1(velocidad1+'s')
        setVelocidadT2(velocidad2+'s')
        setVelocidadT3(velocidad3+'s')
        
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

    function cambiarTortugaElegida(tortuga){
        setTortugas(tortugas.map(tortugaMap => {
            if (tortugaMap.id === tortuga) {
              return {...tortugaMap, elegida: true};
            } else {
              return {...tortugaMap, elegida: false};
            }
          }));
        }

    function generarVelocidad(min, max) {
        return Math.random() * (max - min) + min;
      }
    
      useEffect(() => {
        setTortugas((tortugasAnteriores) => {
          return tortugasAnteriores.map((tortugaAnterior) => {
            let nuevaVelocidad;
            let velocidadGanadoraString = velocidadTotugaGanadora.toString() + 's';
            let esGanadora = false
            if (tortugaAnterior.id === 0) {
              nuevaVelocidad = velocidadT1;
            } else if (tortugaAnterior.id === 1) {
              nuevaVelocidad = velocidadT2;
            } else {
              nuevaVelocidad = velocidadT3;
            }
            if(nuevaVelocidad === velocidadGanadoraString){
                esGanadora =  true
            }
            return {
              ...tortugaAnterior,
              velocidad: nuevaVelocidad,
              ganadora: esGanadora
            };
          });
        });
      }, [velocidadT1, velocidadT2, velocidadT3, velocidadTotugaGanadora]);

    function correr(){
        let monedasAenviar = misMonedas-monedasApostadas;
        let tortugaGanadora = {elegida: false};
        // const velGanadoraString = velocidadTotugaGanadora.toString() + 's'

        tortugas.forEach(tortugaForEach => {
            const ganaste = tortugaForEach.elegida && tortugaForEach.ganadora;
            if (ganaste) {
                tortugaGanadora = tortugaForEach;
                monedasAenviar += monedasApostadas*3;
            }
        });

          if (tortugaGanadora.elegida) {
            setTimeout(()=>setResultadoUltima('+'+monedasApostadas*3), 3000)
            setTimeout(()=>setUltimoGanado(2), 3000)
          } else {
            setTimeout(()=>setResultadoUltima('-'+monedasApostadas), 3000)
            setTimeout(()=>setUltimoGanado(1), 3000)
          }
        
        setMonedasTapadas(true)
        setTimeout(()=>setMonedasTapadas(false), 2000)
        setCorriendo(true)
        setTimeout(()=>setCorriendo(false), 3000)
        
        return { type: types.actualizarMisMonedas, envio: monedasAenviar };     
    }
    
    function comprarTortugas(){
        let monedasNuevas = misMonedas;
        let tortugasActualizada = tortugasCompradas;
        if(misMonedas >= 150){
            monedasNuevas -= 150;
            tortugasActualizada = !tortugasActualizada;
        }
        return {type: types.tortugasCompradas, envioMonedas: monedasNuevas, envioTortugas: tortugasActualizada}
      }


    return(
        <section className="tortugas-seccion" id="Tortugas-Seccion" style={{display: componenteTortugas}}>
            <MonedasJustasModal modalAbierto={modalAbiertoMonedasJustas} cerrarModal={cerrarModalMonedasJustas}></MonedasJustasModal>
            <BarraJuegos />
            <div className={`trampa-tortugas ${ tortugasCompradas && 'tortugas-sin-trampa'}`}>
                <div className="texto-tortugas-trampa">
                    Buena idea, pero no va a funcionar.<br/>
                    Un descuento por el intento:
                </div>
                <button className="boton-tortugas-trampa" onClick={misMonedas===150?abrirModalMonedasJustas:() => dispatch(comprarTortugas())} disabled={misMonedas < 150}>Comprar<br/><span>150 monedas</span></button>
            </div>
            <div className={`contenedor-tortugas ${ !tortugasCompradas && `misterio-uno`}`}>
                <div className={`mis-monedas ${monedasTapadas && `monedas-tapadas`}`}>
                    <div className='contenedor-icono-moneda'>
                        <MonedaIcono />
                    </div>
                    <div className='contenedor-info-mis-monedas'>
                        { misMonedas } (-{ monedasApostadas })
                    </div>
                </div>
                <div className='ultima-apuesta'>
                    Última apuesta: <span className={`${anteriorGanado() ? "anterior-ganado-tortugas" : ""} ${anteriorPerdido() ? "anterior-perdido-tortugas" : ""}`}>{ resultadoUltima }</span>
                </div>
                <div className='apostar'>
                    <button className='boton-tortugas botones-tres boton-apuesta boton-menos' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: restarApuesta() })} disabled={corriendo}>-</button>
                    <div className='cantidad-apuesta'>{ monedasApostadas }</div>
                    <button className='boton-tortugas botones-tres boton-apuesta boton-mas' onClick={ () => dispatch({ type: types.actualizarApostadas, envio: sumarApuesta() })} disabled={corriendo}>+</button>
                </div>
                <div className='cambiar-apuesta-tortugas'>
                    <button className={`boton-apuesta boton-uno ${apuestaElegida[0] ? 'apuesta-elegida-tortugas' : ''}`} onClick={ () => cambiarCantidadApuesta(1)}>1</button>
                    <button className={`boton-apuesta boton-diez ${apuestaElegida[1] ? 'apuesta-elegida-tortugas' : ''}`} onClick={ () => cambiarCantidadApuesta(10)}>10</button>
                    <button className={`boton-apuesta boton-cincuenta ${apuestaElegida[2] ? 'apuesta-elegida-tortugas' : ''}`} onClick={ () => cambiarCantidadApuesta(50)}>50</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[3] ? 'apuesta-elegida-tortugas' : ''}`} onClick={ () => cambiarCantidadApuesta(100)}>100</button>
                    <button className={`boton-apuesta boton-cien ${apuestaElegida[4] ? 'apuesta-elegida-tortugas' : ''}`} onClick={ () => cambiarCantidadApuesta(misMonedas)}>todo</button>
                </div>
                <div className="cancha-tortugas">
                    <div className="cancha-tortuga-uno cancha-num">
                        <img src={pista} alt="Pista de carreras" className="imagen-pista imagen-pista-uno"></img>
                            <div className={`tortuga-individual tortuga-individual-uno ${corriendo ? `corriendo` : ''} `} style={{animationDuration: `${velocidadT1}`}}>
                                <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[0]} colorCaparazonFuera={colorCaparazonesFuera[0]}/>
                            </div>
                            </div>
                    <div className="cancha-tortuga-dos cancha-num">
                        <img src={pista} alt="Pista de carreras" className="imagen-pista imagen-pista-dos"></img>
                            <div className={`tortuga-individual tortuga-individual-dos ${corriendo ? `corriendo` : ''} `} style={{animationDuration: `${velocidadT2}`}}>
                                <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[1]} colorCaparazonFuera={colorCaparazonesFuera[1]}/>
                            </div>
                    </div>
                    <div className="cancha-tortuga-tres cancha-num">
                        <img src={pista} alt="Pista de carreras" className="imagen-pista imagen-pista-tres"></img>
                            <div className={`tortuga-individual tortuga-individual-tres ${corriendo ? `corriendo` : ''} `} style={{animationDuration: `${velocidadT3}`}}>
                                <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[2]} colorCaparazonFuera={colorCaparazonesFuera[2]}/>
                            </div>
                    </div>
                </div>
                <div className="contenedor-elegir-tortugas">
                    <div className={`elegir-tortuga elegir-tortuga-uno ${tortugas[0].elegida ? `tortuga-elegida` : ``}`} onClick={ () => cambiarTortugaElegida(0)}>
                        <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[0]} colorCaparazonFuera={colorCaparazonesFuera[0]} colorPiel={colorTransparente} colorBordes={colorTransparente}/>
                    </div>
                    <div className={`elegir-tortuga elegir-tortuga-dos ${tortugas[1].elegida ? `tortuga-elegida` : ``}`} onClick={ () => cambiarTortugaElegida(1)}>
                        <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[1]} colorCaparazonFuera={colorCaparazonesFuera[1]} colorPiel={colorTransparente} colorBordes={colorTransparente}/>
                    </div>
                    <div className={`elegir-tortuga elegir-tortuga-tres ${tortugas[2].elegida ? `tortuga-elegida` : ``}`} onClick={ () => cambiarTortugaElegida(2)}>
                        <Tortuga tamanio={tamanioTortugas} colorCaparazonDentro={colorCaparazonesDentro[2]} colorCaparazonFuera={colorCaparazonesFuera[2]} colorPiel={colorTransparente} colorBordes={colorTransparente}/>
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