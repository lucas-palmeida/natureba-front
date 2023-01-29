import styled from "styled-components"

export default function ListCar({name,price, cont}){




    return(


<ContainerList>

<span>{name}</span>
<span>{price.replace(".",",")}</span>
<span>{cont}</span>
<span>R$ {(cont*price).toFixed(2).replace(".",",")}</span>

</ContainerList>


 )



}

const ContainerList = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
height:30px;
margin-top:1px;
background-color:white;
span:nth-child(1){
width:130px;
}
`
