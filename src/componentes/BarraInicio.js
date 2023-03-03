import "../estilos/barraInicio.css"
import Info from "../svg/Info"

export default function barraInicio(){

    return(
        <section className="barra-inicio-seccion" id="Barra-Inicio-Seccion">
            <div className="barra-navegacion-inicio">
                <div className="barra-navegacion-inicio-contenido">
                    <div className="barra-inicio-boton-info">
                        <Info />
                    </div>
                </div>
            </div>
        </section>
    )
}