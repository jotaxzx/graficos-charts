import React from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';




const Barra = () => {

    //informacion de la grafica
    const data = {
        //parametros a comprar 
        labels:['Chile', 'Argentina', 'Colombia', 'Peru', 'Bolivia'],
        //personalziacion de la grafica 
        datasets:[{
            label:'Habitantes',

            backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'yellow',
            //valor absoluto de nuestros parametros
            data:[200.48, 326.19, 60.43, 49.64, 46.72]
        }]
    }

    //configuracion de la grafica
    const opciones = {
        //indica el cambio de tamaño, asi nos permite cambiar el tamaño de nuestra grafica
        manitainAspectRatio: false,
        // que se ajuste a cualquier pantalla
        responsive: true,

    }
    return ( 

        <div className="Barra" style={{width: '50%', height: '400px'}}>
            <Bar data={data} options={opciones} /> 
        </div>
        
     );
}
 
export default Barra;