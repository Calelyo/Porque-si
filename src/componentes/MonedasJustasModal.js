import '../estilos/monedasJustasModal.css';

export default function MonedasJustasModal( { children, modalAbierto, cerrarModal } ){
    const noCerrarEnCaja = (evento) => evento.stopPropagation();

    return(
        <section className={`monedas-justas-modal ${modalAbierto && `modal-monedas-justas-abierto`}`} onClick={cerrarModal}>
            <div className='mondas-justas-modal-caja' onClick={noCerrarEnCaja}>
                <div className='monedas-justas-modal-cerrar' onClick={cerrarModal}>
                    X
                </div>
                <div className='monedas-justas-titulo-modal'>
                    Monedas justas
                </div>
                <div className='monedas-justas-modal-texto'>
                    Tenés las monedas justas, y todavía no está implementado el sistema de préstamos, por lo que no vas a poder seguir jugando.<br/>
                    <div className='gana-una-mas'>Ganá por lo menos <span>1 moneda</span> más para poder comprar.</div>
                </div>
            </div>
        </section>
    )
}