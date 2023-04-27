import styled from "styled-components";

export const ProductsContainer = styled.div`
    flex-grow: 1;
    background-color: #B0C4DE;
    color: #000;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow-y: scroll;
    h1 {
      color: blue;
      font-size: 25px;
      margin-bottom: 40px;
    }
  
`;

export const ListItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    color: #000000;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 100px;
    height: 300px;
    img {
      width: 150px;
    }
    h3 {
      color: #000000;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    p {
      margin-top: 30px;
      font-size: 20px;
      color: red;
    }
`;

export const Line = styled.div`
    background-color: lightgray;
    height: 1px;
    width: 100%;
  
`;