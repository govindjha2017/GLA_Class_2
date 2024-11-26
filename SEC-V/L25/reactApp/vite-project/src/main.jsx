import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar';
import Card from './card';

createRoot(document.getElementById('root')).render(
   <>
    <Navbar></Navbar>
    <Card></Card>
   </>
)