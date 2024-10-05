import './App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import logo from './assets/images/logo.png';
import pollo from './assets/images/pollo.jpg';
import fideos from './assets/images/fideos.jpg';

function App() {
  const date = new Date();
  const todaysMenu = `El menú de hoy ${date.toLocaleString('es-ES', {weekday:'long'})} es:`;
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} rounded width="200rem"/>
      </header>
      <body className="mainContainer">
        <h2>{todaysMenu}</h2>
        <br/>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={pollo} />
          <Card.Body>
            <Card.Title>Pollo al horno con puré de papas</Card.Title>
          </Card.Body>
        </Card>
        <br/>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={fideos} />
          <Card.Body>
            <Card.Title>Fideos a la boloñesa</Card.Title>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default App;
