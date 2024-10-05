import './App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import jubileo from './assets/images/jubileo.png';
import pollo from './assets/images/pollo.jpg';
import fideos from './assets/images/fideos.jpg';

function App() {
  const date = new Date();
  const todaysMenu = `Menú ${date.toLocaleString('es-ES', {weekday:'long'})} ${date.toLocaleDateString('es-ES')}:`;
  return (
    <div className="App">
      <header className="App-header">
        <Image src={jubileo} className="logo-image" rounded/>
      </header>
      <body className="mainContainer">
        <h2>{todaysMenu}</h2>
        <br/>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={pollo} />
          <Card.Body>
            <Card.Title>Pollo al horno con puré rústico</Card.Title>
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
      <h6 className='footer'>Las imágenes son solo referenciales</h6>
    </div>
  );
}

export default App;
