import styled from "styled-components"

export default function ListCar({name,price, cont}){


    return(
<div>


<ContainerList>

<span>{name}</span>
<span>{price}</span>
<span>{cont}</span>
<span>{cont*price}</span>

</ContainerList>

</div>
 )



}

const ContainerList = styled.li`
display:flex;
justify-content:space-between;
span:nth-child(1){
width:130px;
}


`
