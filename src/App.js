import './App.css';
import Currencies from './Currencies';
import Header from './Header.js';
import MarketValue from './MarketValue.js'

function App() {
  return (
    <div>
      <Header />
      <MarketValue/>
      <Currencies></Currencies>
    </div>
  );
}

export default App;
