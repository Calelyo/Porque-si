const types = {
    actualizarMisMonedas: 'actualizar - monedas',
    actualizarApostadas: 'actualizar - apostadas',

    verInicio: 'ver - inicio',
    verMoneda: 'ver - moneda',
    verTortugas: 'ver - tortugas',

    tortugasCompradas: 'comprar - tortugas'
}

const initialStore = {
    misMonedas: 220,
    monedasApostadas: 0,
    
    componenteInicio: 'flex',
    componenteMoneda: 'none',
    componenteTortugas: 'none'
    ,
    tortugasCompradas: false
}

const storeReducer = (state, action) => {
    
    switch (action.type) {
        case types.actualizarMisMonedas:
            return{
                ...state,
                monedasApostadas: 0,
                misMonedas: action.envio
            }
        
        case types.actualizarApostadas:
            return{
                ...state,
               monedasApostadas: action.envio
            }
        
        case types.verInicio:
            return{
                ...state,
                componenteInicio: 'flex',
                componenteMoneda: 'none',
                componenteTortugas: 'none',
                monedasApostadas: 0
            }

        case types.verMoneda:
            return{
                ...state,
                componenteInicio: 'none',
                componenteMoneda: 'flex',
                componenteTortugas: 'none',
                monedasApostadas: 0
            }

        case types.verTortugas:
            return{
                ...state,
                componenteInicio: 'none',
                componenteMoneda: 'none',
                componenteTortugas: 'flex',
                monedasApostadas: 0
            }
        
        case types.tortugasCompradas:
            return{
                ...state,
                tortugasCompradas: action.envioTortugas,
                misMonedas: action.envioMonedas
            }

        default:
            return state;
    }
    
}

export { initialStore, types };
export default storeReducer;