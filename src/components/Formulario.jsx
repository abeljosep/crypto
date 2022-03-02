import styled from "@emotion/styled";
import Error from "./Error";
import { useEffect, useState } from "react";
import useSelectCoins from "../hooks/useSelectCoins"
import {monedas} from "./data.js"

const InputSubmit = styled.input`
    background-color: #9497FF;
    width: 100%;
    color: #fff;
    padding: 10px;
    border: none;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    
    :hover{
        background-color: #7b7ffd;
        cursor: pointer;
    }
`



const Formulario = ({setcurrencyCode}) => {
  
    const [criptoCurrency, selectCriptoCurrency] = useState([]);
    const [message, setMessage] = useState("");

    const [currency, SelectMonedas] = useSelectCoins("Elige Tu Moneda", monedas)
    const [cripto, SelectCripto] = useSelectCoins("Choose your crypto", criptoCurrency);
    useEffect(async()=>{
        const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
        const response = await fetch(url);
        const answer = await response.json();

        const arrayCrypto = answer.Data.map((data)=>{
             const object = {
                id: data.CoinInfo.Name,
                name: data.CoinInfo.FullName
            }
            return object
            
        })
        selectCriptoCurrency(arrayCrypto)
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        if([currency, cripto].includes("")){
            setMessage("Both fields are required")
            setTimeout(() => {
                setMessage("")
            }, 3000);
            return
        }
        setMessage("")
        setcurrencyCode({currency, cripto})
    }
    return (
    
    <form
        onSubmit={handleSubmit}
    >
        <SelectMonedas/>
        <SelectCripto/>
        {message && 
            <Error>{message}</Error>
        }
        <InputSubmit 
            type="submit"
            value="get quote"
        
        />
    </form>

  )
}

export default Formulario