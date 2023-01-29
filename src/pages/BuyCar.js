import styled from "styled-components";
import ListCar from "../components/ListCar";

export default function BuyCar({ carrinho}) {

    console.log(carrinho, "list buy")



    return (

        <div>
            
            <ContainerList>

                <span>Descrição</span>
                <span>Valor unitário</span>
                <span>Quantidade</span>
                <span>Total</span>

            </ContainerList>


            {carrinho.map(item => (<ListCar name={item.name} price={item.price} cont={item.cont} />))}

            </div>
    )
}


const ContainerList = styled.li`
display:flex;
justify-content:space-between;
font-weight:700;
span:nth-child(1){
width:130px;
}
`