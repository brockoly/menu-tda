import './App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import logo from './assets/images/logo.png';
import lomo from './assets/images/lomo.jpg';
import cazuela from './assets/images/cazuela.jpg';

function App() {
  const date = new Date();
  const todaysMenu = `El menú de hoy ${date.toLocaleDateString('es-ES')} es:`;
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} rounded width="200rem"/>
      </header>
      <body className="mainContainer">
        <h2>{todaysMenu}</h2>
        <br/>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={lomo} />
          <Card.Body>
            <Card.Title>Lomo Saltado</Card.Title>
          </Card.Body>
        </Card>
        <br/>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={cazuela} />
          <Card.Body>
            <Card.Title>Cazuela de vacuno</Card.Title>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default App;
