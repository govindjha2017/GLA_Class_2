import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import User from './User';

let user = [
  {name:'ajay',age:34},
  {name:'vijay',age:35},
  {name:'rohit',age:37},
]
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
     <Navbar></Navbar>
    { App()}
     <App></App>
     <App/>
      {User(user[0])}
      {User(user[1])}
      {User(user[2])}
   </>
);