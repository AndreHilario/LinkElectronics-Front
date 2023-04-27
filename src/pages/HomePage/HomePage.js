import styled from "styled-components";
import MenuHomePage from "./MenuHomePage";
import Footer from "../../constants/Footer";
import Header from "../../constants/Header";


export default function HomePage() {

  return (
    <HomeContainer>
      <Header />

      <MenuHomePage />

      <Footer />

    </HomeContainer>
  )
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  margin-top: 80px;
`;