import { useContext, useEffect, useState } from 'react'
import CartContext from '../../contexts/CartContext'
import styled from 'styled-components'
import { ProductFooter } from '../ProductPage/styledMenu'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const [shoppingCart, setShoppingCart] = useContext(CartContext)
  let soma = 0
  const navigate = useNavigate()

  return (
    <Container>
      {shoppingCart.length > 0 ? (
        shoppingCart.map(items => (
          <ItemCart>
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
      ) : (
        <ItemCart>
          <h1>Carrinho Vazio</h1>
          <h2>Seu carrinho está vazio</h2>
          <p>
            Para continuar comprando, navegue pelas categorias do site ou faça
            uma busca pelo seu produto
          </p>
        </ItemCart>
      )}
      <FooterCart>
        <h2>Entrega</h2>
        <div>
          <p>Cupom:</p>
          <span>Adicionar cupom de desconto</span>
        </div>
        <div>
          <p>Subtotal </p>
          <span>{soma}</span>
        </div>
        <ProductFooter>
          <button onClick={() => navigate('/login')}>Finalizar compra</button>
        </ProductFooter>
      </FooterCart>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemCart = styled.div`
  margin-top: 100px;
  img {
    width: 80px;
    height: 60px;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`
export const BoxItemCart = styled.div`
  display: flex;
  gap: 0 35px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0;
  }
`

const FooterCart = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 25px;
  gap: 25px 0;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 1.2rem;
  div {
    display: flex;
    align-items: center;
    margin-right: 10%;
    gap: 0 30%;
    span:first-of-type {
      color: blue;
    }
  }
`
