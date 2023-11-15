import './App.css';
import Main from './Pages/Main/Main.jsx'
import { CartContextProvider } from './context/cartContext';
function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Main />
      </div>
    </CartContextProvider>
  );
}

export default App;
