import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Navbar from './Navbar';
import User from './User';

let users = [
  {name:'rahul',age:34},
  {name:'ajay',age:25},
  {name:'rohit',age:45}
]
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
        <Navbar></Navbar>
        {App()}
        <App></App>
        <App/>
        {User(users[0])}
        {User(users[1])}
        {User(users[2])}
      </>
);
 