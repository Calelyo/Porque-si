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
                        <i>¡PORQUE SÍ!</i>
                    </div>
                    <div className="mejoras-barra-inicio">
                        <div className="contenedor-mejoras-inicio">
                            <div className="palabra-mejora palabra-mejoras-inicio">
                                Mejoras:
                                    <div className="mejora-ico-inicio mejora-elegida-inicio">
                                        VACÍO
                                    </div>
                            </div>
                            <div className="mejoras-desplegable-inicio">
                            <div className="palabra-mejora mejora-desplegable mejora-desplegable-uno">
                                    Nombre 1:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-uno">
                                        VACÍO 1
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-dos">
                                    Nombre 2:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-dos">
                                        VACÍO 2
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-tres">
                                    Nombre 3:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-tres">
                                        VACÍO 3
                                    </div>
                                </div>
                                <div className="palabra-mejora mejora-desplegable mejora-desplegable-cuatro">
                                    Nombre 4:
                                    <div className="mejora-ico-inicio mejora-ico-inicio-cuatro">
                                        VACÍO 4
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
                        ¿Por qué se llama así?: me pregunté el por qué de hacer estas apuestas y mi respuesta fue: <i>¡Porque sí! </i> 
                        Es un juego que hice para practicar algunas cosas en ReactJS.
                        La idea del juego es ganar el trofeo, aunque eso todavía no está implementado.
                        Las mejoras tampoco lo están. Hay otras mecánicas que faltan, además de nuevos juegos en los que apostar.
                    </div>
                    <div className="textos-modal-informacion desafios-modal-informacion">
                        A falta del trofeo lanzo un objetivo temporal para quienes tengan idea de desarrollo.
                        Pasé mucho tiempo intentando evitar <i>bugs</i> así que <b>te reto</b>, sí, a vos, a romper el juego en alguno de estos niveles. Si lo lográs dejá el cómo lo hiciste en <a href="" target="_blank"> <i style={{color: '#ffd28e'}}>esta publicación</i></a> en LinkedIn.
                        No son <i>niveles de dificultad</i> propiamente dicho, porque la dificultad depende de los conocimientos de cada quien:
                        <ul>
                            <li>Nivel <i>Honestidad pura:</i> Romper el juego utilizando únicamente las mecánicas del juego, buscando algún error que yo haya dejado pasar.</li>
                            <li>Nivel <i>Inspeccionando cómo un campeón:</i> Romper el juego usando <i style={{color: '#ffffff'}}>inspeccionar elemento</i> (esto es relativamente fácil, porque basta con borrar alguna etiqueta, así que si jugás en este nivel intentá más bien sacar ventaja haciendo algún tipo de "trampa").</li>
                            <li>Nivel <i>SuperMega Hacker:</i> Romper el juego usando la consola. Esto ni yo sé cómo hacerlo, así que si lo hacés contame cómo.</li>
                        </ul>
                        PD: entiéndase por <i>bug</i> cualquier comportamiento que entorpezca o imposibilite el juego. O que de alguna ventaja o desventaja no propuestas por las mecánicas.
                    </div>
                    <div className="textos-modal-informacion herramientas-modal-informacion">
                        Para este juego usé varias herramientas, entre ellas:
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
                                Y el buen ChatGPT
                            </li>
                        </ul>
                    </div>
                </div>
            </InformacionModal>
        </section>
    )
}