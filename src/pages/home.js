import { HomeConteiner, IconDiv,  TopConteiner } from "../css/css"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Home({ apiForm }) {

    const navigate = useNavigate()

    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function exit() {
        navigate("/")
    }

    return (

        <HomeConteiner>

            <TopConteiner>
                <p>{`Natureba.Store`}</p>
                <p>{`este é o token do usuário : ${apiForm.token}`}</p>
                <p>{`este é o nome do usuário :${apiForm.name}`}</p>
                <IconDiv onClick={exit}>
                    <RiLogoutBoxRLine />
                </IconDiv>
            </TopConteiner>


        </HomeConteiner>

    )

}
