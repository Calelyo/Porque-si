import '../estilos/advertenciaModal.css'

export default function AdvertenciaModal( { children, modalAbierto, cerrarModal } ){
    const noCerrarEnCaja = (evento) => evento.stopPropagation();

    return(
        <section className={`modal-advertencia ${modalAbierto && `moda-advetencia-abierto`}`} onClick={ cerrarModal }>
            <div className='modal-advertencia-caja' onClick={ noCerrarEnCaja }>
                <div className="cerrar-modal-informacion" onClick={ cerrarModal }>
                    X
                </div>
                { children }
            </div>
        </section>
    )
}