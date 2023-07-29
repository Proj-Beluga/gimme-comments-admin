import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes/Routing';
import { StoreProvider } from './Contexts/StoreContext';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
