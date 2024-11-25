import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Navbar from './Navbar'; 
import User from './User';

let user = [
  {name:'rahul',age:34},
  {name:'ajay',age:40},
  {name:'rohit',age:45}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      {Navbar()}
      <h1>hello</h1>
      <p>World</p>
      {App()}
      <App></App>
      <App/>

      {User(user[0])}
      {User(user[1])}
      {User(user[2])}
    </>
);
