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
                        <FlechaAtras tamanio='60'/>
                    </div>
                </div>
            </div>
        </section>
    )
}