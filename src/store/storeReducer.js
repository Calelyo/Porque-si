const types = {
    sumarPrueba: 'sumar - prueba',
    restarPrueba: 'restar - prueba',

    // sumarMisMonedas: 'sumar - monedas',
    // restarMisMonedas: 'restar - monedas',
    actualizarMisMonedas: 'actualizar - monedas',
    // sumarApostadas: 'sumar - apostadas',
    // restarApostadas: 'restar - apostadas'
    actualizarApostadas: 'actualizar - apostadas',

    //3 ESTADOS MAS: VER INICIO, VER MONEDA, VER TORTUGA
    verInicio: 'ver - inicio',
    verMoneda: 'ver - moneda',
    verTortugas: 'ver - tortugas'
}

const initialStore = {
    numeroDePrueba: 321,

    misMonedas: 111,
    monedasApostadas: 0,

    // 3 ESTASDOS INICIALES MAS: INICIO: BLOCK, MONEDA: NONE, TORTUGAS: NONE
    componenteInicio: 'flex',
    componenteMoneda: 'none',
    componenteTortugas: 'none'
}

const storeReducer = (state, action) => {
    
    switch (action.type) {
        case types.sumarPrueba:
            return{
                ...state,
                numeroDePrueba: action.envio // numeroDePrueba += 1
            }
        case types.restarPrueba:
            return{
                ...state,
                numeroDePrueba: action.envio
                // numeroDePrueba: initialStore.numeroDePrueba -= 1 // numeroDePrueba -= 1
            }
        //--------

        case types.actualizarMisMonedas:
            return{
                ...state,
                monedasApostadas: 0,
                misMonedas: action.envio
            }

        // case types.restarMisMonedas:
        //     return{
        //         ...state,
        //         misMonedas2: action.envio
        //     }

        case types.actualizarApostadas:
            return{
                ...state,
               monedasApostadas: action.envio
            }

        // 3 CASE MAS: QUE CAMBIE A BLOCK EL QUE QUIERA QUE SE VEA Y A NONE LOS OTROS
        // CREO QUE NO TENDRÍAN QUE HABER 'ACTION.ENVIO' EN ESTOS CASOS

        case types.verInicio:
            return{
                ...state,
                componenteInicio: 'flex',
                componenteMoneda: 'none',
                componenteTortugas: 'none'
            }

        case types.verMoneda:
            return{
                ...state,
                componenteInicio: 'none',
                componenteMoneda: 'flex',
                componenteTortugas: 'none'
            }

        case types.verTortugas:
            return{
                ...state,
                componenteInicio: 'none',
                componenteMoneda: 'none',
                componenteTortugas: 'flex'
            }

        // case types.restarApostadas:
        //     return{
        //         ...state,
        //         monedasApostadas2: action.envio
        //     }


        default:
            return state;
    }
    
}

export { initialStore, types };
export default storeReducer;