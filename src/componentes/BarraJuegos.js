import { useContext } from 'react'
import { types } from "../store/storeReducer"
import '../estilos/barraJuegos.css'
import { StoreContext } from '../store/StoreProvider'
import FlechaAtras from '../svg/FlechaAtras';

export default function BarraJuegos(){
    const [store, dispatch] = useContext(StoreContext);
    const { componenteInicio } = store;

    return(
        <section className="barraJuegos-seccion" id="BarraJuegos-Seccion">
            <div className='barra-navegacion-juegos'>
                <div className='barra-navegacion-juegos-contenido'>
                    <div className='barra-juegos-boton-atras' onClick={()=>dispatch({type: types.verInicio})}>
                        <FlechaAtras />
                    </div>
                </div>
                <div className="mejoras-barra-juegos">
                        <div className="contenedor-mejoras-juegos">
                            <div className="palabra-mejora-inicio palabra-mejoras-juegos">
                                Mejoras:
                                    <div className="mejora-ico-juegos mejora-elegida-juegos">
                                        VACIO
                                    </div>
                            </div>
                            <div className="mejoras-desplegable-juegos">
                            <div className="palabra-mejora-inicio mejora-desplegable mejora-desplegable-uno">
                                    Nombre1:
                                    <div className="mejora-ico-juegos mejora-ico-juegos-uno">
                                        VACIO1
                                    </div>
                                </div>
                                <div className="palabra-mejora-inicio mejora-desplegable mejora-desplegable-dos">
                                    Nombre2:
                                    <div className="mejora-ico-juegos mejora-ico-juegos-dos">
                                        VACIO2
                                    </div>
                                </div>
                                <div className="palabra-mejora-inicio mejora-desplegable mejora-desplegable-tres">
                                    Nombre3:
                                    <div className="mejora-ico-juegos mejora-ico-juegos-tres">
                                        VACIO3
                                    </div>
                                </div>
                                <div className="palabra-mejora-inicio mejora-desplegable mejora-desplegable-cuatro">
                                    Nombre4:
                                    <div className="mejora-ico-juegos mejora-ico-juegos-cuatro">
                                        VACIO4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}