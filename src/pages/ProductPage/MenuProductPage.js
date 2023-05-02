import {
  ProductPageContainer,
  MainContent,
  ButtonsContainer,
  ProductFooter,
  Footer
} from './styledMenu'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CartContext from '../../contexts/CartContext'

export default function MenuProductPage() {
  const [products, setProduct] = useState({})
  const [shoppingCart, setShoppingCart] = useContext(CartContext)
  const { id } = useParams()
  const [form, setForm] = useState({ amount: '' })
  const [disabled, setDisabled] = useState(false)
  const [getModel, setGetModel] = useState('')
  const [getColor, setGetColor] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/${id}`)
      .then(res => setProduct(res.data))
  }, [])

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleColor(e) {
    setGetColor(e.target.value)
  }

  function handleModel(e) {
    setGetModel(e.target.value)
  }

  //   function sendRequest(e, id) {
  //     e.preventDefault()
  //     const data = { amount, voltage }

  //     setDisabled(true)
  //     axios
  //       .post(`${process.env.REACT_APP_API_URL}/shopping/${id}`, data)
  //       .then(() => {
  //         setDisabled(false)
  //         navigate('/cart')
  //       })
  //       .catch(err => {
  //         alert(err.response.data)
  //         setDisabled(false)
  //       })
  //   }

  function sendProductCart(e) {
    e.preventDefault()
    const productCart = {
      name,
      brand,
      price,
      urlImage,
      id,
      form,
      color,
      model
    }
    setShoppingCart([...shoppingCart, productCart])
    navigate('/cart')
  }
  const { name, urlImage, model, price, description, brand, color, amount } =
    products
  return (
    <ProductPageContainer>
      <MainContent>
        <h1>{name}</h1>
        <img src={urlImage} alt="1" />
        <h2>R$ {price},00</h2>
        <p>Até 10x de R$ {price / 10},00 sem juros</p>

        <ButtonsContainer>
          <div>
            <p>Seleciona a cor</p>
            <button onClick={handleColor} value={color}>
              {color}
            </button>
            <p>Capacidade:</p>
          </div>

          <div>
            <button onClick={handleModel} value={model}>
              {model} GB
            </button>
          </div>
        </ButtonsContainer>
        <form>
          <label>Coloque a quantidade de produtos: </label>
          <input
            type="number"
            name="amount"
            min="1"
            max={amount}
            value={amount}
            onChange={handleForm}
            required
            disabled={disabled}
          />
        </form>
      </MainContent>
      <ProductFooter>
        <button onClick={sendProductCart}>Enviar pedido</button>
      </ProductFooter>
      <Footer>
        <h3>Marca: {brand}</h3>
        <p>Descrição: {description}</p>
      </Footer>
    </ProductPageContainer>
  )
}
