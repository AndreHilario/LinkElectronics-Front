import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function login() {
  const { setUserName, setToken } = useContext(AuthContext)
  const navigate = useNavigate()
  axios
    .post(`${process.env.REACT_APP_API_URL}/login`, form)
    .then(res => {
      setToken(res.data.token)
      setUserName(res.data.userName)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userName', res.data.userName)
      navigate('/home')
    })
    .catch(err => console.log(err.response.data))
}
