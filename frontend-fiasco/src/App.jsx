import './App.css'
import HomePage from './Homepage'
import Header from './Header'
import Products from './Products'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Profile from './Profile'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
