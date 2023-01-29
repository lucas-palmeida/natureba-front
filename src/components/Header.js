import { RiLogoutBoxRLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
export default function Header({ apiForm, form, setForm, carrinho, exit, setListProducts}) {
    
//    const navigate = useNavigate()

    function handleFilter(e) {
        e.preventDefault();

        axios.get("http://localhost:5001/products")
        .then((res) => {


            let inputFilter = res.data.filter(item => item.name.includes(form.search))

        
            setListProducts(inputFilter)

            //                console.log(inputFilter,"teste")
        })

        
    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // function exit() {
    //     navigate("/")
    // }

    return (

        <ContainerHeader>

            <Contairner>
                <h1>{`Natureba.Store`}</h1>

                {apiForm.token === undefined ?
                    <span onClick={exit}>
                        <ion-icon name="log-in-outline"></ion-icon> <span>Entrar</span></span> :
                    <span onClick={exit}> <RiLogoutBoxRLine></RiLogoutBoxRLine><span>Sair</span></span>
                }
            </Contairner>

            <Contairner>
                <form onSubmit={handleFilter}>
                    <input name="search"
                        placeholder="pesquise por um produto especifico"
                        onChange={handleForm}
                        value={form.search}>
                    </input>

                    <button type="submit">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </form>
            
            <Link to="/carrinho"><span>
                <ion-icon name="cart-outline"></ion-icon><span>carrinho</span>
            {carrinho.length}
            </span>
            </Link>
            </Contairner>

        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
width:100vw;
display:flex;
flex-direction:column;
background-color:white;
position:fixed;
top:0;
left:0;
padding-bottom:10px;
ion-con{
    width:25px;
    height:25px;
}
`
const Contairner = styled.section`
display:flex;
justify-content:space-around;
align-items:center;
margin-top:15px;
a{
    text-decoration:none;
}
h1{
    font-family:"open-sans";
    font-size:42px;
    font-weight:700;
    width:263px;
    height:56px;
    color:green;
    text-align:center;
}
form{
    display:flex;
    align-items:center;
    box-sizing:border-box;
}
input{
    width:210px;
    height:25px;
}
button{
    background-color:green;
ion-icon{
    color:white;
    width:25px;
    height:25px;
}
}
span,
ion-icon{
    color:green;
    
}
span{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`