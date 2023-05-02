import { Link } from 'react-router-dom'
import { ProductsContainer, ListItemContainer, Line } from './styledMenu'
import AuthContext from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export default function MenuHomePage() {
  const { userName } = useContext(AuthContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`)
      .then(res => setProducts(res.data))
  }, [])

  return (
    <ProductsContainer>
      <h1>Seja bem-vindo(a), {userName}!</h1>
      {setProducts
        ? products.map(p => (
            <Link to={`/products/${p._id}`} key={p._id}>
              <ListItemContainer>
                <div>
                  <img src={p.urlImage} alt="" />
                </div>
                <Line></Line>
                <span>
                  <h3>{p.name}</h3>
                  <p>R$ {p.price},00</p>
                </span>
              </ListItemContainer>
            </Link>
          ))
        : '...carregando'}
    </ProductsContainer>
  )
}
