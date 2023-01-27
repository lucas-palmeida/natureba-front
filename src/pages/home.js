import { HomeConteiner, IconDiv,  TopConteiner } from "../css/css"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Product from "../components/Product.js"
import styled from "styled-components"



export default function Home({ apiForm }) {

    const [listProducts, setListProducts]=useState([])
    //const [selectProducts, setSelectProducts] =useEffect([])

    const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    axios.get("http://localhost:5001/products")
    .then((res) =>{ 
    
 setListProducts(res.data)




console.log(res.data)
} )


function exit() {
        navigate("/")
    }
    
    return (
        
        <HomeConteinerA>

            <TopConteiner>
                <p>{`Natureba.Store`}</p>
                <p>{`este é o token do usuário : ${apiForm.token}`}</p>
                <p>{`este é o nome do usuário :${apiForm.name}`}</p>
                <IconDiv onClick={exit}>
                    <RiLogoutBoxRLine />
                </IconDiv>
            </TopConteiner>

    <h2>Categoria 01 </h2>
<ContainerCategoryA>
            
    {listProducts.map( p => (  <Product name = {p.name} price ={p.price} category={p.category} unity = {p.unity} picture ={p.picture}/> ))}
             
                
                </ContainerCategoryA>
        
    <h2>Categoria 02 </h2>
                <ContainerCategoryB>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
                </ContainerCategoryB>
        
    <h2>Categoria 03 </h2>
                <ContainerCategoryC>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
                </ContainerCategoryC>
        
        </HomeConteinerA>

    )

}




const HomeConteinerA =styled.main`
    display:flex;
    flex-direction:column;
`

const ContainerCategoryA =styled.section`
    display:flex;
    overflow-x:scroll;
`

const ContainerCategoryB =styled.section`
    display:flex;
    overflow-x:scroll;
`

const ContainerCategoryC =styled.section`
    display:flex;
    overflow-x:scroll;
`