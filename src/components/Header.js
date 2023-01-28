import { useState } from "react"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Header({ apiForm, form, setForm }) {

    
    const navigate = useNavigate()

    function handleFilter(e) {
        e.preventDefault();

    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }



    function exit() {
        navigate("/")
    }


    return (

        <ContainerHeader>


            <Contairner>
                <p>{`Natureba.Store`}</p>

                <p>{apiForm.name}</p>

                {apiForm.token === undefined ?
                    <span>
                        <ion-icon name="log-in-outline" onClick={exit}></ion-icon> <span>Entrar</span></span> :
                    <span><RiLogoutBoxRLine onClick={exit}></RiLogoutBoxRLine><span>Sair</span></span>
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

                <ion-icon name="cart-outline"></ion-icon>
            </Contairner>

        </ContainerHeader>
    )
}


const ContainerHeader = styled.header`
display:flex;
flex-direction:column;
ion-con{
    width:25px;
    height:25px;
}
`
const Contairner = styled.section`
display:flex;
justify-content:space-around;
margin-top:15px;
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
       width:25px;
    height:25px;
}
span{
    width:70px;
}

`