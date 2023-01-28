import styled from "styled-components"
import Product from "./Product"

export default function Category({name, price, category, unity, picture,  }){


return (

<div>
<h3> {category}</h3>


</div>

)
}


const Container = styled.ul`
display:flex;
flex-direction:column;
`