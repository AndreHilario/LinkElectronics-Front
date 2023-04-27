
import { Link } from "react-router-dom";
import { ProductsContainer, ListItemContainer, Line } from "./styledMenu";



export default function MenuHomePage() {

    return (

        <ProductsContainer>
            <h1>Seja bem-vindo(a), Fulano!</h1>
            <Link to={`/products/:id `}>
                <div>
                    <ListItemContainer>
                        <div>
                            <img src="https://imgs.casasbahia.com.br/15341376/3xg.jpg" alt="Imagem do produto" />
                        </div>
                        <Line></Line>
                        <span>
                            <h3>Iphone 14 Pro Max</h3>
                            <p>R$ 1.500,00</p>

                        </span>
                    </ListItemContainer>
                </div>
            </Link>
            <Link to={`/products/:id `}>
                <div>
                    <ListItemContainer>
                        <div>
                            <img src="https://imgs.casasbahia.com.br/15341376/3xg.jpg" alt="Imagem do produto" />
                        </div>
                        <Line></Line>
                        <span>
                            <h3>Iphone 14 Pro Max</h3>
                            <p>R$ 1.500,00</p>
                            <span>Celular apple</span>
                        </span>
                    </ListItemContainer>
                </div>
            </Link>
            <Link to={`/products/:id `}>
                <div>
                    <ListItemContainer>
                        <div>
                            <img src="https://imgs.casasbahia.com.br/15341376/3xg.jpg" alt="Imagem do produto" />
                        </div>
                        <Line></Line>
                        <span>
                            <h3>Iphone 14 Pro Max</h3>
                            <p>R$ 1.500,00</p>

                        </span>
                    </ListItemContainer>
                </div>
            </Link>
        </ProductsContainer>

    )
};