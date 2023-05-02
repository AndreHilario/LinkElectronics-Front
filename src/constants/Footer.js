import styled from 'styled-components'
import { FiHome, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/CartContext'
import axios from 'axios'
import { useContext } from 'react'

export default function Footer() {
  const navigate = useNavigate()
  const { setUserName, token, setToken } = useContext(AuthContext)
  const config = { headers: { Authorization: `Bearer ${token}` } }

  function logout() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
      .then(() => {
        setUserName(undefined)
        setToken(undefined)
        localStorage.clear()
        navigate('/')
      })
      .catch(err => alert(err))
  }

  return (
    <FooterHomePage>
      <IconsFooter>
        <FiHome onClick={() => navigate('/')} />
        <FiLogOut onClick={() => logout()} />
      </IconsFooter>
    </FooterHomePage>
  )
}

const FooterHomePage = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: #1e90ff;
  -webkit-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);

  z-index: 1;
  svg {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
`
const IconsFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`
