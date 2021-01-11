import './App.css';
import {Doughnut, Pie } from 'react-chartjs-2';
import 'antd/dist/antd.css';
import { Row, Col, Divider} from 'antd';

function App() {

  //informacion
  const data = {
    labels:['Google', 'Bing', 'Yahoo', 'Otros'],
    datasets:[{
      //incluye el % de cada uno de nuestros paramentros
      data: [74.56, 10.54, 9.42, 5.42],
      // colores de nuestros parametros
      backgroundColor: ['red', 'blue', 'green', 'yellow'],
     }]
  }

  // (configuracion) opciones de nuestra grafica
  const opciones ={
    manitainAspectRatio: false,
    // que se adapte en cualquier dispositivo
    responsive: true
  }
  return (
    <>
      <Divider> Graficos  </Divider>
      <div className="App" style={{width: '500px', height: '700px'}}>
      
        <Row gutter={[8, 8]} className="fila">
          <Col xs={24} sm={12} md={12}><div className="col"><Doughnut  data={data} options={opciones}  /></div></Col>
          <Col xs={24} sm={12} md={12}><div className="col"><Pie  data={data} options={opciones}   /> </div></Col>
        </Row>
            
      </div>

    

    </>

  );
}

export default App;
