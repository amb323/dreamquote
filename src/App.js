import logo from './neuro.jpg';
import './App.css';
import quote from './data.json'

function App() {
  const x = Math.floor(Math.random() * 10);
  return (
      <>
      <div className="imagebox">
      <img src={logo} className="image" />
      </div>
      <h1 className="title">Dream Quote</h1>
      <p className="texto">{quote[x].quote}</p>
      <div className="buttonbox">
      <button className="boton" onClick={() => window.location.reload()}>NEW QUOTE</button>
      </div>
      </>
  );
}

export default App;
