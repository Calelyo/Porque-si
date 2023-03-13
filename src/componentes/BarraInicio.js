import { useContext } from "react"
import "../estilos/barraInicio.css"
import { useModal } from "../hooks/useModal";
import { StoreContext } from "../store/StoreProvider"
import Info from "../svg/Info"
import MonedaIcono from "../svg/MonedaIcono";
import InformacionModal from "./InformacionModal";

export default function BarraInicio(){

    const [store, dispatch] = useContext(StoreContext);
    const { misMonedas } = store;
    
    const [modalAbiertoInformacion, abrirModalInformacion, cerrarModalInformacion] = useModal(false);

    return(
        <section className="barra-inicio-seccion" id="Barra-Inicio-Seccion">
            <div className="barra-navegacion-inicio">
                <div className="barra-navegacion-inicio-contenido">
                    <div className="monedas-en-inicio">
                        <div className="contenedor-icono-moneda-inicio">
                            <MonedaIcono />
                        </div>
                        <div className="contenedor-mis-monedas-inicio">
                            { misMonedas }
                        </div>
                    </div>
                    <div className="nombre-juego">
                        {/* <i>porque sí</i> */}
                        <i>¡PORQUE SÍ!</i>
                    </div>
                    <div className="mejoras-barra-inicio">
                        <div className="contenedor-mejoras-inicio">
                            <div className="palabra-mejora palabra-mejoras-inicio">
                                Mejoras:
                                    <div className="mejora-ico-inicio mejora-elegida-inicio">
                                        VACIO
                                    </div>
                            </div>
                            <div className="mejoras-desplegable-inicio">
                            <div className="palabra-mejora mejora-desplegable mejora-desplegable-uno">
                                    Nombre1:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-uno">
                                        VACIO1
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-dos">
                                    Nombre2:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-dos">
                                        VACIO2
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-tres">
                                    Nombre3:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-tres">
                                        VACIO3
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-cuatro">
                                    Nombre4:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-cuatro">
                                        VACIO4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="barra-inicio-boton-info" onClick={ abrirModalInformacion }>
                        <Info />
                    </div>
                </div>
            </div>
            <InformacionModal modalAbierto={ modalAbiertoInformacion } cerrarModal={ cerrarModalInformacion }>
                <div className="contenido-modal-informacion">
                    <div className="textos-modal-informacion descripcion-juego">
                        ¿Por qué se llama así?: me pregunté el por qué de hacer estas apuestas y mi respuésta fue: <i>¡Porque sí! </i> 
                        Es un juego que hice para practicar algunas cosas en ReactJS.
                        La idea del juego es ganar el trofeo, aunque eso todavía no está implementado.
                        Las mejoras tampoco lo están. Hay otras mecánicas que faltan, ademas de más juegos en los que apostar.
                    </div>
                    <div className="textos-modal-informacion desafios-modal-informacion">
                        A falta del trofeo lanzo un objetivo temporal para quienes tengan idea de desarrollo.
                        Pasé mucho tiempo intentando evitar <i>bugs</i> así que <b>te reto</b>, sí, a vos, a romper el juego en alguno de estos niveles. Si lo lográs dejá el cómo lo hiciste en <a href="" target="_blank"> <i style={{color: '#ffd28e'}}>ésta publciación</i></a> en LinkedIn.
                        No son <i>niveles de dificultad</i> propiamente dicho, porque la dificultad depende de los conocimientos de cada quien:
                        <ul>
                            <li>Nivel <i>Honestidad pura:</i> Romper el juego utílizando únicamente las mecánicas del juego, buscando algún error que yo haya dejado pasar.</li>
                            <li>Nivel <i>Inspecciónando cómo un campeon:</i> Romper el juego usando "inspeccionar elemento" (ésto es relativamente fácil, porque basta con borrar alguna etiqueta, así que si juegan en éste nivel, sean creativos).</li>
                            <li>Nivel <i>SuperMega Hacker:</i> Romper el juego usando la consola. Ésto ni yo se como hacerlo, así que si lo haces contame cómo.</li>
                        </ul>
                        pd: entiendase por <i>bug</i> cuálquier comportamiento que entorpezca o imposibilite el juego.
                    </div>
                    <div className="textos-modal-informacion herramientas-modal-informacion">
                        Para éste juego usé varias herramientas, entre ellas:
                        <ul>
                            <li>
                                ReactJS (HTML, CSS, JavaScript)
                            </li>
                            <li>
                                Visual Studio Code
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Git
                            </li>
                            <li>
                                GitHub
                            </li>
                            <li>
                                Firebase
                            </li>
                            <li>
                                Adobe Illustrator
                            </li>
                            <li>
                                Figma
                            </li>
                            <li>
                                Y el buen chatGPT
                            </li>
                        </ul>
                    </div>
                </div>
            </InformacionModal>
        </section>
    )
}