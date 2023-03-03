import { useState } from 'react';
import './App.css';
import Inicio from './componentes/Inicio';
import Moneda from './componentes/Moneda.js';
import Tortugas from './componentes/Tortugas';
import StoreProvider from './store/StoreProvider';

function App() {
  // LOS TIPOS DE DISPLAY DEVERÍAN SER ESTADOS GLOBALES (StoreReducer)
    const [displayInicio, setDisplayInicio] = useState("block");
    const [displayMoneda, setDisplayMoneda] = useState("none");
    const [displayTortuga, setDisplayTortuga] = useState("none");
    

  return (
    <div className="App">
      <header className="App-header">
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
