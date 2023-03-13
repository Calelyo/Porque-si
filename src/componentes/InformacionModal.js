import '../estilos/informacionModal.css';

export default function InformacionModal( { children, modalAbierto, cerrarModal } ){
    const noCerrarEnCaja = (evento) => evento.stopPropagation();

    return(
        <section className={`modal-informacion ${modalAbierto && `modal-informacion-abierto`}`} onClick={ cerrarModal }>
            <div className="modal-informacion-caja" onClick={ noCerrarEnCaja }>
                <div className="cerrar-modal-informacion" onClick={ cerrarModal }>
                    X
                </div>
                { children }
            </div>
        </section>
    )
}