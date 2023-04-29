import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"



export default function LoginPage (){

    const [form, setForm] = useState({email: "", password: ""})
    const navigate = useNavigate()

    function login (e){

        e.preventDefault()

        axios.post("http://localhost:5000/login", form)
    
        .then((res) => navigate("/home"))
        .catch((err) => console.log(err))

    }

    return (
        <>
         
        <HeaderLogin>
        <h1>Faça Login</h1>
        </HeaderLogin>
        
        <Login>
        <form onSubmit={login}>
        <input 
        placeholder="E-mail" 
        type="email" 
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
        />
        <input 
        placeholder="Senha" 
        type="password"
        value={form.password}
        onChange={(e) => setForm({...form, password: e.target.value})}/>

    <button type="submit">Entrar</button>  
    </form>     


    <Link to="/singup">
        Primeira vez? Cadastre-se!
      </Link>
        </Login>
       
        </>
        
    )
}

const HeaderLogin = styled.div`

    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:150px;
    

h1{
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
  input{
    font-size: 25px;
    margin-top:20px;
    padding:10px;
    border-radius:20px;
    border: 0 none;
    outline: 0;
    -webkit-box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  box-shadow: 0px 5px 25px 0px rgba(0,0,0,1);
  }

`

