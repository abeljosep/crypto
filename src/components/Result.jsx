import styled from "@emotion/styled"

const Result = ({quote}) => {
    const Container = styled.div`
        color: white;
        font-family: "Lato", sans-serif;
        font-size: 20px;
       
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
    ` 
    const Span = styled.span`
        font-weight: 900;
    `

    const Heading = styled.p`
        font-size: 30px;
        
    `
    const Image = styled.img`
        display: block;
        width: 130px;
        gap: 2rem;
        
    `


  return (
    <Container>
        <Image src={`https://cryptocompare.com/${quote.image}`} alt="Cryto Symbol" />
        <div>
            <Heading>The Price is: <Span>{quote.price}</Span> </Heading>
            <p>Highest price of the day: <Span>{quote.high}</Span> </p>
            <p>Lowest price of the day: <Span>{quote.low}</Span> </p>
            <p>Last 24 hours fluctuation: <Span>{quote.changePercentage}</Span> </p>
            <p>Last Update: <Span>{quote.update}</Span> </p>
        </div>
    </Container>
  )
}

export default Result