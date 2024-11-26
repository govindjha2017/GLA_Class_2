import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <Navbar/>
      <h1>hello</h1>
      <h2>World</h2>
      {App()}
      <App></App>
      <App/>
   </>
);

 