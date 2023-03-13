import { useContext } from "react";
import "../estilos/inicio.css"
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/storeReducer";
import MonedaElegirCara from "../svg/MonedaElegirCara";
import MonedaElegirCeca from "../svg/MonedaElegirCeca";
import BarraInicio from "./BarraInicio.js";
import Tortuga from "../svg/Tortuga";
import BarraContactoModal from "./BarraContactoModal";
import MonedasJustasModal from "./MonedasJustasModal";
import imgWeb from '../img/webico.png'
import imgLinkedIn from '../img/linkedinblanco.png'
import imgGitHub from '../img/githubblanco.png'
import { useModal } from "../hooks/useModal";

export default function Inicio(){
  const tamanioMonedas = '150';
  const tamanioTortuga = '280';

  const [store, dispatch] = useContext(StoreContext);
  const {misMonedas, componenteInicio, tortugasCompradas} = store;
  const [modalAbiertoContacto, abrirModalContacto, cerrarModalContacto] = useModal(false)
  const [modalAbiertoMonedasJustas, abrirModalMonedasJustas, cerrarModalMonedasJustas] = useModal(false)

  function comprarTortugas(){
    let monedasNuevas = misMonedas;
    let tortugasActualizada = tortugasCompradas;
    if(misMonedas >= 200){
        monedasNuevas -= 200;
        tortugasActualizada = !tortugasActualizada;
    }
    return {type: types.tortugasCompradas, envioMonedas: monedasNuevas, envioTortugas: tortugasActualizada}
  }

    return(
        //
        <section className="inicio-seccion" id="Inicio-Seccion" style={{display: componenteInicio}}>
            <MonedasJustasModal modalAbierto={modalAbiertoMonedasJustas} cerrarModal={cerrarModalMonedasJustas}></MonedasJustasModal>
            <BarraInicio />
            <div className="contenedor-juegos">
                <div className="contenedor-juego-individual contenedor-juego-moneda" onClick={()=>dispatch({type: types.verMoneda})}>
                    <div className="titulo-juego titulo-juego-moneda">
                        CARA O CECA
                    </div>
                    <div className="monedas-fondo">
                        <MonedaElegirCara tamanio={tamanioMonedas}/>
                        <MonedaElegirCeca tamanio={tamanioMonedas}/>
                    </div>
                </div>

                <div className={`contenedor-juego-individual contenedor-juego-tortugas ${ !tortugasCompradas && `byn`}`}>
                        <div className="titulo-juego titulo-juego-tortugas">
                            CARRERA DE TORTUGAS
                        </div>
                        <div className={`tortuga-fondo ${ !tortugasCompradas && `byn`}`} onClick={()=>dispatch({type: types.verTortugas})}>
                            <Tortuga tamanio={tamanioTortuga}/>    
                        </div>
                        <div className={`desploquear-tortugas ${tortugasCompradas && `compradas`}`}>
                            <button className={`boton-desbloquear-tortugas ${ misMonedas < 200 && `boton-desb-tortugas-desactivado`}`} onClick={misMonedas===200?abrirModalMonedasJustas:()=>dispatch(comprarTortugas())} disabled={misMonedas < 200}>Comprar<br/><span>200 monedas</span></button>
                        </div>
                </div>
            </div>
            <div className="abrir-modal-contacto" onClick={ abrirModalContacto }>
                {/* ↑^ */}⇧
            </div>
            <BarraContactoModal modalAbiertoContacto={ modalAbiertoContacto } cerrarModalContacto={ cerrarModalContacto }>
                <div className="mi-web-contacto">
                        <img src={ imgWeb } alt='Imagen Web' loading="lazy"></img>
                        <a href="https://calelsprumont.web.app/" target="_blank"><i>calelsprumont.web.app</i></a>
                </div>
                <div className="otros-links-contacto">
                    <div className="link-linkedin-contacto">
                        <a href="https://www.linkedin.com/in/calelsprumont/" target="_blank"> <img src={ imgLinkedIn } alt="Logo LinkedIn" loading="lazy"></img> </a>
                    </div>
                    <div className="link-github-contacto">
                    <a href="" target="_blank"> <img src={ imgGitHub } alt="Logo GitHub" loading="lazy"></img> </a>
                    </div>
                </div>
            </BarraContactoModal>
        </section>
    )
}