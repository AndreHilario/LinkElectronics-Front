
import logo from "./logo512.png"
import { ProductsContainer, ListItemContainer, Line } from "./styledMenu";



export default function MenuHomePage() {

    return (

        <ProductsContainer>
            <h1>Seja bem-vindo(a), Fulano!</h1>
            <div>
                <ListItemContainer>
                    <div>
                        <img src={logo} alt="Imagem do produto" />
                    </div>
                    <Line></Line>
                    <span>
                        <h3>Iphone 14 Pro Max</h3>
                        <p>R$ 1.500,00</p>

                    </span>
                </ListItemContainer>
            </div>
            <ListItemContainer>
                <div>
                    <img src={logo} alt="Imagem do produto" />
                </div>
                <Line></Line>
                <span>
                    <h3>Televisão Samsung</h3>
                    <p>R$ 1.500,00</p>

                </span>
            </ListItemContainer>

        </ProductsContainer>

    )
};