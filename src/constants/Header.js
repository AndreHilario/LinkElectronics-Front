import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {

    return (
        <HeaderHomePage>
            <div>
                <CartIcon />
            </div>
        </HeaderHomePage>

    )
};

const HeaderHomePage = styled.header`
  background-color: #1E90FF;
  width: 100%;
  height: 70px;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(152,251,152,1);
  -moz-box-shadow: 0px 4px 5px 0px rgba(152,251,152,1);
  box-shadow: 0px 4px 5px 0px rgba(152,251,152,1);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
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