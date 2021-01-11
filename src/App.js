import './App.css';
import {Doughnut, Pie } from 'react-chartjs-2';

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
    // que se adapte en cualquier dispositivo
    responsive: true
  }
  return (
    <div className="App">
      <Doughnut  data={data} options={opciones}  />
      <br/>
      <Pie  data={data} options={opciones} />
      
    </div>
    

  );
}

export default App;
