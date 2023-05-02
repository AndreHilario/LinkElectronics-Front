import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import styled from 'styled-components'
import LoginPage from './pages/LoginPage/LoginPage'
import SingUp from './pages/SingUpPage/SingUpPage'
import AuthContext from './contexts/CartContext'
import { useState } from 'react'
import CartContext from './contexts/CartContext'
import Header from './constants/Header'
import Cart from './pages/HomePage/Cart'
import Checkout from './pages/HomePage/Checkout'

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <PagesContainer>
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        <CartContext.Provider value={[shoppingCart, setShoppingCart]}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/singup" element={<SingUp />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </AuthContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #b0c4de;
  width: calc(100vw - 50px);
  height: 100vh;
  padding: 25px;
`
