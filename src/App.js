import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import styled from "styled-components";


export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
};

const PagesContainer = styled.main`
  background-color: #B0C4DE;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`;

