import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 30px;
        color: #000000;
        text-align: center;
        margin-bottom: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    img {
        width: 300px;
        margin-bottom: 40px;
        background-color: #fff;
        border-radius: 100px;
    }
    label {
        font-size: 20px;
        color: #000000;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid lightgreen;
        padding: 10px;
        margin: 1px;
        margin-bottom: 15px;
        :focus {
            border: 2px solid #3CB371;
            margin: 0px;
        }
    }

`;
export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    p {
        font-size: 20px;
        color: #000000;
    }
    div {
        display: flex;
        justify-content: space-between;   
        button {
            background-color: #3CB371;
            border: 1px solid white;
            border-radius: 5px;
            width: 50px;
            height: 40px;
            margin-right: 10px;
            color: #fff;
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
`;
export const ProductFooter = styled.footer`
    width: 100%;
    margin-top: 33px;
    display: flex;
    justify-content: center;
    button {
        width: calc(100% - 120px);
        border-radius: 10px;
        height: 50px;
        border: 1px solid green;
        background-color: #3CB371;
        font-size: 18px;
        color: #fff;
    }
`;
