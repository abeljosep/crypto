import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    color: #fff;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    font-size: 22px;
    display: block;
    `
const Select = styled.select`
    width: 100%;
    margin: 20px 0;
    padding: 14px;
    border-radius: 10px;
    font-size: 18px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
`

const useSelectCoins = (label, options) => {
    const [state, setState] = useState("");
    const selectMonedas = () =>(
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={(e)=>setState(e.target.value)}
            >
                <option value="">- Choose your currency -</option>
                {options.map(opcion=>(
                    
                        <option 
                            key={opcion.id}
                            value={opcion.id}
                            
                        >
                            {opcion.name}
                        </option>
                    
                    ))}
            </Select>
        </>
    )
    return[state, selectMonedas];
}

export default useSelectCoins