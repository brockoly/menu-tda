import logo from './assets/images/logo.png';
import './App.css';

function App() {
  const date = new Date();
  const todaysMenu = `El menú de hoy ${date.toLocaleDateString('es-ES')} es:`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className='body'>
        <p>{todaysMenu}</p>
        <p>- Salchichas con pure</p>
        <p>- Pollito con papas</p>
      </body>
    </div>
  );
}

export default App;