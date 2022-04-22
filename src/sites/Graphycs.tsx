import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, BarElement, CategoryScale, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Todo} from '../components/TodoList'
import APIService from "../services/APIService";
import { Bar } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

const TODO_END_POINT = "/todos"

const Graphycs : React.FC= () => {

  const getTodos = () => APIService.get(`${TODO_END_POINT}`);
  const [todos, setTodos] = useState<Todo[]>([]);
  
  let priority1:number[]=[todos.filter((todo) =>todo.priority==="normal").length];
  let priority2:number[]=[todos.filter((todo) =>todo.priority==="moderada").length];
  let priority3:number[]=[todos.filter((todo) =>todo.priority==="urgente").length];
  let completedData:number[]=[todos.filter((todo) =>todo.completed===false).length,todos.filter((todo) =>todo.completed===true).length];

  useEffect(() =>{
    async function asyncFunction() {
       try {
           const response:any = await getTodos();
           setTodos(response.data);
       } catch (error) {
           console.log(error)
       }
   }
   asyncFunction();
}, [])
    const dataCompleted = {
        labels: [/*'Todo',*/ 'En Proceso', 'Completada'],
        datasets: [
          {
            label: '# of Votes',
            data: completedData,
            backgroundColor: [
              //'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              //'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
    const labels = ['Tareas por prioridad'];
    const dataPriority = {
      labels,
      datasets: [
        {
          label: 'Normal',
          data: priority1,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
        {
          label: 'Moderada',
          data: priority2,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
          label: 'Urgente',
          data: priority3,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


    return (
        <div style={{display:"flex",flexDirection:"row",alignItems:"top", width:600,height:700,paddingTop:40}}>
            <div>
                <Doughnut data={dataCompleted} width={500} height={500}  />
            </div>
            <div>
                <Bar data={dataPriority} width={500} height={500} />
            </div>   
        </div>
)}


export default Graphycs;