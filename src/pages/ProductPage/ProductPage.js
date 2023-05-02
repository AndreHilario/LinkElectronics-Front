import styled from 'styled-components'
import Footer from '../../constants/Footer'
import MenuProductPage from './MenuProductPage'

export default function ProductPage() {
  return (
    <ProductContainer>
      <MenuProductPage />

      <Footer />
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`
