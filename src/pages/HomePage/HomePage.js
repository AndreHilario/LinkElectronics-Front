import styled from 'styled-components'
import MenuHomePage from './MenuHomePage'
import Footer from '../../constants/Footer'

export default function HomePage() {
  return (
    <HomeContainer>
      <MenuHomePage />

      <Footer />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
