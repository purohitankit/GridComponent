import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GridComponent from './GridComponent';
import * as serviceWorker from './serviceWorker';

  var arr=[];
  arr = [{
      EmployeeId: 111, EmployeeName: 'Ankit',Address:"Pune"
  },
  {
      EmployeeId: 222, EmployeeName: 'Mayank',Address:"Pune"
  },
  {
      EmployeeId: 333, EmployeeName: 'Shubham',Address:"Pune"
  },
  {
      EmployeeId: 444, EmployeeName: 'Sarang',Address:"Pune"
  },
  {
      EmployeeId: 555, EmployeeName: 'Shoaib',Address:"Pune"
  }
]
  
ReactDOM.render(
  <React.StrictMode>
   <GridComponent rowcoll={arr}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
