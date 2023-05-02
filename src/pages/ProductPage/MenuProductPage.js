import { useEffect, useState } from "react";
import { ProductPageContainer, MainContent, ButtonsContainer, ProductFooter } from "./styledMenu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function MenuProductPage() {

    const { id } = useParams();

    const [product, setProduct] = useState();
    const [form, setForm] = useState({ amount: "" });
    const [disabled, setDisabled] = useState(false);
    const [voltage, setVoltage] = useState("");

    const { amount } = form;

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/products/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch(err => alert(err.response.data))
    }, [id]);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleVoltage(e) {
        setVoltage(e.target.value);
    }

    function sendRequest(e, id) {
        e.preventDefault();

        setDisabled(true);

        const data = { amount, voltage };

        axios
            .post(`${process.env.REACT_APP_API_URL}/shopping/${id}`, data)
            .then(() => {
                setDisabled(false);
                navigate("/home");
            })
            .catch((err) => {
                alert(err.response.data);
                setDisabled(false);
            });
    }


    return (

        <ProductPageContainer>
            <MainContent>
                <h1>{product.title}</h1>
                <img src={product.url} alt={`Imagem: ${product.title}`} />

                <form>
                    <label>Coloque a quantidade de produtos:      </label>
                    <input
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={handleForm}
                        required
                        disabled={disabled}
                    />
                </form>
                <ButtonsContainer>
                    <p>Selecione a voltagem:</p>
                    <div>
                        <button
                            onClick={handleVoltage}
                            value="110V"
                            style={{ backgroundColor: voltage === "110V" ? "red" : "#3CB371" }}
                        >
                            110V
                        </button>
                        <button
                            onClick={handleVoltage}
                            value="220V"
                            style={{ backgroundColor: voltage === "220V" ? "red" : "#3CB371" }}
                        >
                            220V
                        </button>
                    </div>
                </ButtonsContainer>
            </MainContent>

            <ProductFooter>
                <button onClick={() => sendRequest(id)}>Enviar pedido</button>
            </ProductFooter>
        </ProductPageContainer>
    )


};