import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function SingUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    state: '',
    city: '',
    road: ''
  })

  function newUser(e) {
    e.preventDefault()

    axios
      .post(`${process.env.REACT_APP_API_URL}/sing-up`, form)
      .then(res => alert('Usuário cadastrado com sucesso'))
      .catch(err => alert(err.response.data))
  }

  return (
    <>
      <HeaderLogin>
        <h1>Insira seus dados</h1>
      </HeaderLogin>

      <Login>
        <form onSubmit={newUser}>
          <input
            required
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <input
            placeholder="Estado"
            name="state"
            value={form.state}
            onChange={e => setForm({ ...form, state: e.target.value })}
          />
          <input
            placeholder="Cidade"
            name="city"
            value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
          />
          <input
            placeholder="Endereço"
            name="road"
            value={form.road}
            onChange={e => setForm({ ...form, road: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </Login>
    </>
  )
}

const HeaderLogin = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

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
    font-size: 25px;
    margin-top: 15px;
  }
`
