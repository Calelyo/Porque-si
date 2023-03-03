import { useContext } from "react";
import "../estilos/inicio.css"
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/storeReducer";
import MonedaElegirCara from "../svg/MonedaElegirCara";
import MonedaElegirCeca from "../svg/MonedaElegirCeca";
import BarraInicio from "./BarraInicio.js";
import Tortuga from "../svg/Tortuga";

export default function Inicio(){
  const tamanioMonedas = '150';
  const tamanioTortuga = '280';

  const [store, dispatch] = useContext(StoreContext);
  const {componenteInicio} = store;

    return(
        //
        <section className="inicio-seccion" id="Inicio-Seccion" style={{display: componenteInicio}}>
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
                    {/* <div className="contenedor-juegos-gris"></div> */}
                </div>

                <div className="contenedor-juego-individual contenedor-juego-tortugas" onClick={()=>dispatch({type: types.verTortugas})}>
                    <div className="titulo-juego titulo-juego-tortugas">
                        CARRERA DE TORTUGAS
                    </div>
                    <div className="tortuga-fondo">
                        <Tortuga tamanio={tamanioTortuga}/>    
                    </div>                    
                </div>
            </div>
        </section>
    )
}