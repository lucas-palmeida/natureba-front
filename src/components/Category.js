import Product from "./Product"

export default function Category({name, price, category, unity, picture, all}){

    
return (

<div>
<h3> {category}</h3>
{all.map( p => (  <Product name = {p.name} price ={p.price} category={p.category} unity = {p.unity} picture ={p.picture} /> ))}
</div>

)
}