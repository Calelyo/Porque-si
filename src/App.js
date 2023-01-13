import './App.css';
import Moneda from './componentes/Moneda.js';
import Tortugas from './componentes/Tortugas';
import StoreProvider from './store/StoreProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className='app-componentes'>
        <StoreProvider>
            <Moneda />
            <Tortugas />
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
