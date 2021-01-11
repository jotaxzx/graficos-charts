import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import 'antd/dist/antd.css';
import { Row, Col} from 'antd';



const Barr = () => {

    const [nombre, setNombre] = useState([]);
    const [salario, setSalario] = useState([]);

    const data = {
        //parametros a comprar 
        labels:nombre,
        //personalziacion de la grafica 
        datasets:[{
            label:'Empleados',

            backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'yellow',
            //valor absoluto de nuestros parametros
            data:salario
        }]
    }

    //configuracion de la grafica
    const opciones = {
        //indica el cambio de tamaño, asi nos permite cambiar el tamaño de nuestra grafica
        manitainAspectRatio: false,
        // que se ajuste a cualquier pantalla
        responsive: true,

    }

    const peticionApi = async () =>{
        await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response=>{
            const respuesta = response.data.data;
            var auxNombre =[], auxSalario=[];

            respuesta.map(item=>{
                auxNombre.push(item.employee_name);
                auxSalario.push(item.employee_salary);
               
            })
            console.log(response.data.data)
            setNombre(auxNombre);
            setSalario(auxSalario);
        })
    }

    useEffect(()=>{
        peticionApi();
    },[])
    return ( 
        <div className="Barra" style={{width: '100%', height: '400px'}}>
            
                <Row gutter={[8, 8]} className="fila">
                    
            <Col xs={24} sm={12} md={12}><div ><Bar data={data} options={opciones}  /> </div></Col>
            
            </Row>
            
        </div>
     );
}
 
export default Barr;