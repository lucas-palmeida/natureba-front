import styled from "styled-components"


export default function Poduct({name, price, category, unity, picture}){



    return(
        <ContainerProduct>
        <li>
        <img src= {picture} alt={name}/>
        <p>R$ {price}/ {unity}</p>
        <p>{name}</p>
        </li>    
        </ContainerProduct>
    )
}

const ContainerProduct = styled.ul`
display:flex;
flex-direction: column;
justify-content:center;
width: 101px;
height:175px;
margin: 15px 0 15px 10px;

img{
    width: 90px;
    height:120px;
    margin:0
}
li{
    height:175px;
}
p{
    margin-top:5px;
    text-align:center;
}
`