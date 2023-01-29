import React, { useEffect } from "react"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{

    const [apiForm , setApiForm] = React.useState({})
    
    // const [user, setUser] =React.useState({
    //     username:'',
    //     token:''
    // })

    const [carrinho,setCarrinho] =React.useState([])


useEffect(()=>{

    const apiFormStorage = localStorage.getItem('apiForm');
    if(apiFormStorage){
        setApiForm(JSON.parse(apiFormStorage))
    }
    const carrinhoStorage = localStorage.getItem('carrinho');
    if(carrinhoStorage){
        setCarrinho(JSON.parse(carrinhoStorage))
    }

},[])

return(
    <AuthContext.Provider value = {{apiForm,setApiForm,carrinho,setCarrinho}}>
        {props.children}
    </AuthContext.Provider>
)

}
    

export const useAuth = () => React.useContext(AuthContext)