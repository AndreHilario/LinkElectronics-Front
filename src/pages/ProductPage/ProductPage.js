import styled from "styled-components";
import Footer from "../../constants/Footer";
import Header from "../../constants/Header";
import MenuProductPage from "./MenuProductPage";


export default function ProductPage() {

    return (
        <ProductContainer>
            <Header />

            <MenuProductPage />

            <Footer />

        </ProductContainer>
    )
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  margin-top: 80px;
`;