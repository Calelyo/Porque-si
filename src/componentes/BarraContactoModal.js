import '../estilos/barraContactoModal.css'

export default function BarraContactoModal( { children, modalAbiertoContacto, cerrarModalContacto} ){
    const noCerrarEnCaja = (evento) => evento.stopPropagation();

    return(
        <section className={`modal-contacto ${modalAbiertoContacto && `modal-contacto-abierto`}`} onClick={ cerrarModalContacto }>
            <div className="modal-contacto-caja" onClick={ noCerrarEnCaja }>
                { children }
            </div>
        </section>
    )
}