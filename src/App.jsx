import React from 'react'
import './App.css'
import Home from "./pages/Home"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/viewAll' element={<ProductList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
