import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter'
import "./index.css"
import Product from './Product'

createRoot(document.getElementById('root')).render(
  <>
    {/* {Counter()}
    <Counter></Counter> */}
    <Counter/>

    <Product/>
  </>
)
