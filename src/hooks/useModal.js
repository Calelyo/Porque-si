import { useState } from "react";

export const useModal = (valorInicial = false) => {
    const [modalAbierto, setModalAbierto] = useState(valorInicial);

    const abrirModal = () => setModalAbierto(true);

    const cerrarModal = () => setModalAbierto(false);

    return [modalAbierto, abrirModal, cerrarModal];
}