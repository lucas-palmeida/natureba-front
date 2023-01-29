import { useState } from "react"
import styled from "styled-components"


export default function Poduct({ name, price, category, unit, picture, setCarrinho , carrinho, handleSelect, }) {
    
    const [count, setcount] =useState(0)
    
//    let test =[]    
    let cont= 0

    function soma(){
  
        cont = count+1
        setcount(cont)
console.log(count,"contar")

handleSelect(name,price,cont)
    }


    function subtrai(){
  
        cont = count-1
        setcount(cont)
console.log(count,"contar")

handleSelect(name,price,cont)
    }


 // test.push({name:name, price:price, quantidade:count})
// console.log(name, price, cont)
// const prod = {name:name, price:price, cont:cont}


// test.push(prod)
//console.log(test,"test");

//console.log(test,"arry de")
//setCarrinho()
//console.log(carrinho);
    //}


  //  function subtrai(){
  //      const cont = count -1
        
    //        setcount(cont)
      //  console.log(name, price, cont)
      //      }

    return (



        <ContainerProduct>

            <li>
        {count>0? <ContainerIcons><button onClick={subtrai}>-</button>
            <span> {count}</span>
            <button onClick={soma}>+</button></ContainerIcons>:
            <ButtonSoma onClick={soma}>+</ButtonSoma>}
                <img src={picture} alt={name} />
                <p>R$ {price}/{unit}</p>
                <p>{name} </p>
            </li>
        </ContainerProduct>

    )
}

const ContainerProduct = styled.ul`
display:flex;
flex-direction: column;
justify-content:center;
//width: 101px;
//height:175px;
//margin: 15px 0 15px 10px;

img{
    width: 148px;//90px;//
    height: 148px; //120px;//
    margin:0;
}
li{
    width:168px;
    height:268px;
    padding:10px 10px 30px
}
p{
    margin-top:5px;
    text-align:center;
}
`

const ButtonSoma= styled.button`
margin-left: 66.2px;
`
const ContainerIcons = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`
