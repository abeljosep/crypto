import { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import ImagenCripto from "./img/imagen-criptos.png"
import Formulario from './components/Formulario'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: "lato", sans-serif;
  color: #fff;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  text-align: center;
  &::after{
    content: " ";
    background-color: #66a2fe;
    width: 100px;
    height: 6px;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [currencyCode, setcurrencyCode] = useState({})
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false);
  
  useEffect(async()=>{
    if(Object.keys(currencyCode).length>0){
      setLoading(true)
      setQuote({})
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currencyCode.cripto}&tsyms=${currencyCode.currency}`
      const response = await fetch(url)
      const answer = await response.json();
      const info = answer.DISPLAY[currencyCode.cripto][currencyCode.currency]
      console.log(info)
      const obj = {
        price: info.PRICE,
        update: info.LASTUPDATE,
        high: info.HIGH24HOUR,
        low: info.LOWDAY,
        changePercentage: info.CHANGEPCT24HOUR,
        image: info.IMAGEURL
      }

      setQuote(obj);
      setLoading(false)

    }
  },[currencyCode])
  
  return (
    // <>
      <Container>
        <Imagen
          src={ImagenCripto}
          alt="criptocoins images"
        />
        <div>
          <Heading>Criptocurrencies Instant Quotes </Heading>
          
          <Formulario
            setcurrencyCode={setcurrencyCode}
          />
          {loading && 
            <Spinner 

            />
          }
          {Object.keys(quote).length>0 && 
            <Result
              quote={quote}
            />
          }
          

        </div>

      </Container>
    // </>
  )
}

export default App
