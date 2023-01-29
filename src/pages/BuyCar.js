import styled from "styled-components";
import ListCar from "../components/ListCar";
import { useAuth } from "../providers/auth";

export default function BuyCar() {

    const { apiForm, carrinho } = useAuth()

    console.log(carrinho, "list buy")

    const teste = carrinho

    let sum = 0;

    teste.forEach(({ price, cont }) => {
        Number(teste.price);
        sum += price * cont;

    });

    sum = sum.toFixed(2).replace(".", ",")

    return (

        <Container>

            <ContainerList>

                <span>Descrição</span>
                <span>Valor unitário</span>
                <span>Qnd</span>
                <span>Total</span>

            </ContainerList>


            {carrinho.map(item => (<ListCar name={item.name} price={item.price} cont={item.cont} />))}

            <TituleResult>

                <span>total:</span> <span>{sum}</span>
            </TituleResult>

            <form>
<input placeholder="Nome"></input>
<div>
<input placeholder="Rua"></input>
<input placeholder="N"></input>
<input placeholder="Bairro"></input>
</div>
<div>
<input placeholder="Cidade"></input>
<input placeholder="Estado"></input>
<input placeholder="CEP"></input>
</div>

<input placeholder="Nome do titular do cartão"></input>
<div>
<input placeholder="Numero do cartão"></input>
<input placeholder="validade"></input>
<input placeholder="codigo de segurança"></input>
</div>
            <Button>Finalizar</Button>
                        </form>

        </Container>
    )


}

const Container = styled.section`
background-color: #f5f5f5;
padding:5px;
padding-top:20px;
form{
    display:flex;
    flex-direction:column;
    margin-top:30px;
}
input{
    margin-top:10px;
}
div{
    display:flex;
input:nth-child(2){
    width:40px;
}
input:nth-child(3){
    width:123px;

}
}
`

const ContainerList = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
font-weight:700;
background-color:white;
height:30px;
span:nth-child(1){
width:130px;
}
`

const TituleResult = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
font-weight:700;
`

const Button =styled.button`

`