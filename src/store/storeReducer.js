const types = {
    sumarPrueba: 'sumar - prueba',
    restarPrueba: 'restar - prueba'
}

const initialStore = {
    numeroDePrueba: 321
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

        default:
            return state;
    }
    
}

export { initialStore, types };
export default storeReducer;