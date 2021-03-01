import './App.css';
import Warehouses from './components/Warehouses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Used Cars Shop</h1>
        <h5>Best place to buy used cars</h5>
        <Warehouses />
      </header>
    </div>
  );
}

export default App;
