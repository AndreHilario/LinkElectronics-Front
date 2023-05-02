import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { Container, ItemCart, BoxItemCart } from '../../pages/HomePage/Cart'
import styled from 'styled-components'

export default function Checkout() {
  const [shoppingCart] = useContext(CartContext)
  return (
    <CheckoutContainer>
      <TitleCheckout>
        <h1>Compra Realizada com sucesso</h1>
      </TitleCheckout>
      <Container>
        {shoppingCart.length > 0
          ? shoppingCart.map(items => (
              <ItemCart>
                <h2>Resumo do pedido</h2>
                <BoxItemCart>
                  <img src={items.urlImage} alt="" />
                  <div>
                    <h1>
                      {items.name} {items.model} {items.color}
                    </h1>
                    <h2>R$ {items.price},00</h2>
                  </div>
                </BoxItemCart>
              </ItemCart>
            ))
          : '...aguarde'}
      </Container>
    </CheckoutContainer>
  )
}

const CheckoutContainer = styled.div`
  margin-top: 100px;
  position: relative;
`
const TitleCheckout = styled.div`
  h1 {
    color: green;
    font-size: 2rem;
    text-align: center;
  }
`
