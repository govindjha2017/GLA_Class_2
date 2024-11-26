import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './Navbar'
import "./index.css"
import Product from './Product'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Product price="100" image="https://plus.unsplash.com/premium_photo-1682430259342-427ec43ebc38?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Product price="200" image="https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D"/>
    <Product price="300" image="https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D"/>
  </>
)
