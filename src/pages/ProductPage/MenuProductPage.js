import { ProductPageContainer, MainContent, ButtonsContainer, ProductFooter } from "./styledMenu";
import logo from "./logo512.png"

export default function MenuProductPage() {
    return (
        <ProductPageContainer>

            <MainContent>
                <h1>Título do produto</h1>
                <img src={logo} alt="1" />

                <form>
                    <label>Coloque a quantidade de produtos:      </label>
                    <input
                        type="number"
                        required
                    />
                </form>
                <ButtonsContainer>
                    <p>Selecione a voltagem:</p>
                    <div>
                        <button>110V</button>
                        <button>220V</button>
                    </div>
                </ButtonsContainer>
            </MainContent>
            <ProductFooter>
                <button>Enviar pedido</button>
            </ProductFooter>

        </ProductPageContainer>
    )
};