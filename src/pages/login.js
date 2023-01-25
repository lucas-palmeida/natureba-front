import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cestaOrganica from "../assets/cestaOrganica.jpg"
import { Conteiner , Form } from "../css/css";




export default function Login({ setApiForm }) {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    async function sendForm(event) {

        event.preventDefault();
        
        try {

            const tokenObj = await axios.post(`${process.env.REACT_APP_API_URL}`, form)

            console.log(tokenObj)

            setApiForm(tokenObj.data)

            navigate("/home")

            
        } catch (err) {
            alert(err.response.data)
        }

        setForm({
            email: "",
            password: ""
        })
    }




    return (
        <Conteiner>
            <img src={cestaOrganica} />
            <Form>
                <form onSubmit={sendForm}>
                    <input  placeholder="E-mail" type="email" name="email" onChange={handleForm} value={form.email} />
                    <input  placeholder="Senha" type="password" name="password" onChange={handleForm} value={form.password} />
                    <button type="submit">Entrar</button>
                </form>
            </Form>
            <Link to={"/cadastro"} style={{ textDecoration: 'none' }}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>

        </Conteiner>
    )
}



