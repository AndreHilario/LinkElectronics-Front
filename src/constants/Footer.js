import styled from "styled-components";
import { FiHome, FiLogOut } from "react-icons/fi";

export default function Footer() {
    return (
        <FooterHomePage>
            <IconsFooter>
                <FiHome />
                <FiLogOut />
            </IconsFooter>
        </FooterHomePage>
    )
};

const FooterHomePage = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: #1E90FF;

  z-index: 1;
  svg {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
`;
const IconsFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;