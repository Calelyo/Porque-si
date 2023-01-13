const types = {
    sumarPrueba: 'sumar - prueba',
    restarPrueba: 'restar - prueba',

    // sumarMisMonedas: 'sumar - monedas',
    // restarMisMonedas: 'restar - monedas',
    actualizarMisMonedas: 'actualizar - monedas',
    // sumarApostadas: 'sumar - apostadas',
    // restarApostadas: 'restar - apostadas'
    actualizarApostadas: 'actualizar - apostadas'
}

const initialStore = {
    numeroDePrueba: 321,

    misMonedas: 111,
    monedasApostadas: 0
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