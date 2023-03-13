import { useState } from 'react';
import './App.css';
import AdvertenciaModal from './componentes/AdvertenciaModal';
import Inicio from './componentes/Inicio';
import Moneda from './componentes/Moneda.js';
import Tortugas from './componentes/Tortugas';
import { useModal } from './hooks/useModal';
import StoreProvider from './store/StoreProvider';

function App() {
  
  const [modalAbiertoAvdertencia, abrirModalAdvertencia, cerrarModalAdvertencia] = useModal(true)

  return (
    <div className="App">
    <header className="App-header">
        <AdvertenciaModal modalAbierto={ modalAbiertoAvdertencia } cerrarModal={ cerrarModalAdvertencia }>
          <div className='advertencia-titulo'>
            ¡ADVERTENCIA!
          </div>
          <div className='advertencia-texto'>
            Todavía no está implementado un sistema de guardado en caché, 
            por lo que al <span>actualizar la página</span> el juego, incluidas las monedas, <span>se van a reiniciar.</span>
          </div>
        </AdvertenciaModal>
      </header>

      <div className='app-componentes'>
        <StoreProvider>
           <div>
             <Inicio />
           </div>
           <div>
              <Moneda/>
            </div>
            <div>
              <Tortugas />
            </div>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
