import styled from 'styled-components'

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 1.4px;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1.7px;
  }
  p {
    margin-top: 8px;
    letter-spacing: 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
  }
  img {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 55px;
    background-color: #fff;
    border-radius: 25px;
  }
  label {
    margin-top: 25px;
    margin-bottom: 6px;
    font-size: 20px;
    color: #000000;
  }
  input {
    font-size: 20px;
    width: 158px;
    height: 28px;
    border-radius: 5px;
    outline: none;
    border: 1px solid lightgreen;
    padding: 10px;
    margin-bottom: 15px;
    :focus {
      border: 2px solid #3cb371;
      margin: 0px;
    }
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  p {
    font-size: 20px;
    color: #000000;
    margin-top: 30px;
    margin-bottom: 6px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    button {
      background-color: #fff;
      font-weight: 700;
      padding: 15px;
      letter-spacing: 1px;
      border: 1px solid gray;
      border-radius: 5px;
      width: 180px;
      height: 50px;
      color: #000;
    }
    &:hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 20px;
    margin: 0 10px;
    position: relative;
    top: -5px;
  }
`
export const ProductFooter = styled.footer`
  margin-top: 33px;
  display: flex;
  justify-content: center;
  button {
    margin-top: 15px;
    width: 90%;
    border-radius: 10px;
    height: 60px;
    border: 1px solid green;
    background-color: #3cb371;
    font-size: 1.5rem;
    color: #fff;
  }
`
export const Footer = styled.div`
  margin-bottom: 27%;

  h3:first-of-type {
    margin-top: 15%;
    margin-bottom: 10px;
  }
  p {
    letter-spacing: 2px;
    line-height: 165%;
  }
`
