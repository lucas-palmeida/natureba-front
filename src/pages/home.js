//import { HomeConteiner, IconDiv, TopConteiner } from "../css/css"
//import { RiLogoutBoxRLine } from "react-icons/ri"
//import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Product from "../components/Product.js"
import styled from "styled-components"
import Header from "../components/Header"
//import { count } from "console"
//import { fileURLToPath } from "url"


export default function Home({ apiForm }) {

    const [count, setCount] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [form, setForm] = useState({ search: "" })
    const [listProducts, setListProducts] = useState([])
    const [filtervegetables, setFiltervegetables] = useState([])
    const [filterfruits, setFilterfruits] = useState([])
    const [filterleaf, setFilterleaf] = useState([])

    // const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    useEffect(() => {

        axios.get("http://localhost:5001/products")
            .then((res) => {


                let vegetables = res.data.filter(item => item.category === "legumes")
                let fruits = res.data.filter(item => item.category === "frutas")
                let leaf = res.data.filter(item => item.category === "folhas")
                let inputFilter = res.data.filter(item => item.name.includes(form.search))

                setFiltervegetables(vegetables)
                setFilterfruits(fruits)
                setFilterleaf(leaf)
                setListProducts(inputFilter)

                //                console.log(inputFilter,"teste")
            })

    }, [])




    function handleSelect(name, price, cont) {

        //let test= {name:name, price:price}


        const isSlected = carrinho.find((s) => s.name === name)

        if (isSlected && cont > 0) {
            const newList = carrinho.filter((s) => s.name !== name)
            setCarrinho([...newList, { name, price, cont }])
        } else if (cont <= 0) {
            const newList = carrinho.filter((s) => s.name !== name)
            setCarrinho([...newList])
        }
        else {
            setCarrinho([...carrinho, { name, price, cont }])
        }


    }

    console.log(carrinho, "carrinho")

    // function exit() {
    //         navigate("/")
    //     }
    //console.log(form,"form")
    //    console.log(carrinho,"Carrinhooo")

    return (


        <HomeConteinerA>

            <Header apiForm={apiForm} setForm={setForm} form={form} carrinho={carrinho} />


            {listProducts.length > 17 ?
                <div>
                    <h2>vegetables</h2>
                    <ContainerCategoryA>

                        {filtervegetables.map(p => (<Product key={p._id}
                            name={p.name} price={p.price} category={p.category}
                            unit={p.unit} picture={p.picture}
                            count={count} setCount={setCount}
                            handleSelect={handleSelect} />))}


                    </ContainerCategoryA>

                    <h2>fruits </h2>
                    <ContainerCategoryB>

                        {filterfruits.map(p => (<Product key={p._id}
                            name={p.name} price={p.price} category={p.category}
                            unit={p.unit} picture={p.picture}
                            count={count} setCount={setCount}
                            handleSelect={handleSelect} />))}

                    </ContainerCategoryB>

                    <h2>leaf </h2>

                    <ContainerCategoryC>

                        {filterleaf.map(p => (<Product key={p._id}
                            name={p.name} price={p.price} category={p.category}
                            unit={p.unit} picture={p.picture}
                            count={count} setCount={setCount}
                            handleSelect={handleSelect} />))}

                    </ContainerCategoryC>



                </div> :

                <ContainerCategoryA>
                    {listProducts.map(p => (<Product key={p._id}
                        name={p.name} price={p.price} category={p.category}
                        unit={p.unit} picture={p.picture}
                        count={count} setCount={setCount}
                        handleSelect={handleSelect} />))}

                </ContainerCategoryA>

            }

        </HomeConteinerA>
    )
}



const HomeConteinerA = styled.main`
flex:display;
flex-direction:column;
`

const ContainerCategoryA = styled.section`
    display:flex;
    overflow-x:scroll;
`

const ContainerCategoryB = styled.section`
    display:flex;
    overflow-x:scroll;
`

const ContainerCategoryC = styled.section`
    display:flex;
    overflow-x:scroll;
`