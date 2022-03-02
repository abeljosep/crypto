import styled from "@emotion/styled"

const Message = styled.div`
    color: #f0efef;
    text-align: center;
    text-transform: uppercase;
    background-color: #ED4F32;
    border-radius: 10px;
    padding: 15px;
    font-weight: 900;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
`

const Error = ({children}) => {
  return (
    <Message>
      {children}
    </Message>
  )
}

export default Error
