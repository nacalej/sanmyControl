import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'chart.js/auto';

import {
  Chart as ChartJS,
  BarElement
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  BarElement,
);

export default function ChartData() {

    const [rentals, setRentals] = useState([]);
   
    const reqApi = async() => {
      await axios.get("http://localhost:5000/chartData")
      .then(response => {
        let res = response.data;        
          setRentals(res);
      });
    };
    
    useEffect(() => {
      reqApi()
    }, []);


    let auxRentals = rentals && rentals ? rentals['0'] : '';
    
    let arrayValues      = auxRentals &&  Object.values(auxRentals);
    let arrayKeysRentals = auxRentals && Object.keys(auxRentals);
    
    let newArray = [];
    
    for(let i=0; i < arrayValues?.length; i++){
      newArray.push(arrayValues[i]);
    }

    let newKeysArray = [];

    for(let j=0; j <arrayKeysRentals?.length; j++){
      newKeysArray.push(arrayKeysRentals[j]);
    }

    const data = {
      labels: newKeysArray?.map(x => x),
      datasets: [{
        label: `Total por mes`,
        data: newArray,
        backgroundColor: [
          'rgba(76,217, 239, 1)',
        ],
        borderColor: [
          'rgba(71, 204, 225, 2)'        
        ],
        borderWidth: 1,
        borderRadius: 4
      }]
    };

    var options = {
      maintainAspectRatio: false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }

    return (
      <div style={{width: '400px', height: '300px'}}>
       { data.labels && data.labels[0] ?
       <Bar
          data={data}
          height={50}
          options={options}
  
        /> :  <div style={{display: 'none'}}> </div>}
      </div>
    );
  };
  