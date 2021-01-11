import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import 'antd/dist/antd.css';
import { Row, Col} from 'antd';



const Barr = () => {

    //const [nombre, setNombre] = useState([]);
   // const [salario, setSalario] = useState([]);
   const [detalle, setDetalle] = useState([]);
   const [ usabilidad, setUsabilidad] = useState([]);

    const data = {
        //parametros a comprar 
        labels:detalle,
        //personalziacion de la grafica 
        datasets:[{
            label:'Empleados',

            backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'yellow',
            //valor absoluto de nuestros parametros
            data:usabilidad
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
        await axios.post('http://workflowcci.sistemasygestion.cl/APIS/ApiBKPMAU/General/ObtieneProcedimientosRecurrentes').then(response=>{
            const respuesta = response.data.data;
            //var auxNombre =[], auxSalario=[];
            var auxDetalle = [], auxUsabilidad=[];

            respuesta.map(item=>{
                auxDetalle.push(item.DETALLE);
                auxUsabilidad.push(item.USABILIDAD);
                
            })

           {/* respuesta.map(item=>{
               // auxNombre.push(item.employee_name);
               // auxSalario.push(item.employee_salary);

               
            })*/}
            //console.log(response.data.data)
            console.log(response.data.data);
            //setNombre(auxNombre);
            //setSalario(auxSalario);
            setDetalle(auxDetalle);
            setUsabilidad(auxUsabilidad);
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