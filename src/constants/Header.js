import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {

    return (
        <HeaderHomePage>
            <h1>LinkElectronics</h1>
            <div>
                <CartIcon />
            </div>
        </HeaderHomePage>

    )
};

const HeaderHomePage = styled.header`
  background-color: #1E90FF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  -webkit-box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
  h1 {
    color: white;
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif
  }
  div {
    width: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`
const CartIcon = styled(FiShoppingCart)`
  font-size: 24px;
  color: white;
  margin-right: 16px;
`;