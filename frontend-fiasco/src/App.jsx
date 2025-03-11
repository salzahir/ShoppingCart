import './App.css'
import HomePage from './Homepage'
import Header from './Header'
import Products from './Products'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </>
  )
}

export default App
