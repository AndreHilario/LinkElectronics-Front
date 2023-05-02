import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/CartContext'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const { setUserName, setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, form)
      .then(res => {
        setToken(res.data.token)
        setUserName(res.data.userName)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userName', res.data.userName)
        navigate('/checkout')
      })
      .catch(err => alert(err.response.data))
  }

  return (
    <>
      <HeaderLogin>
        <h1>Finalizar compra</h1>
      </HeaderLogin>

      <Login>
        <form onSubmit={login}>
          <input
            placeholder="E-mail"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit">Entrar</button>
        </form>

        <Link to="/singup">Primeira vez? Cadastre-se!</Link>
      </Login>
    </>
  )
}

const HeaderLogin = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  h1 {
    color: white;
    font-style: italic;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
  }
`

const Login = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  margin-top: 25px;
  input {
    font-size: 25px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    border: 0 none;
    outline: 0;
    -webkit-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 1);
  }
  button {
    background-color: #fff;
    border: 1px solid green;
    border-radius: 10px;
    margin-top: 40px;
    width: calc(100vw - 90px);
    height: 50px;
    font-size: 30px;
    color: green;
  }
`
