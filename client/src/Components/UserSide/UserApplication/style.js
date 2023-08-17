import styled from "styled-components";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// type BoxInputs = {
//     children: React.ReactNode
// }


export const ExportButton = styled(ReactHTMLTableToExcel)`

    background: red;
    color: white;
    cursor: pointer;

    width: 10rem;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 0.2rem;
    
    font-weight: 500;
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    
    :hover{
        background: #333745;
        width: 6.5rem;

    }
`


export const BoxInputs = styled.section`

    height: 5.8rem;
    /* width: 100%; */
    margin-top: 3.8rem;
    margin-bottom: 2.8rem;
    display: flex;
    gap: 11.6rem;

    

    .BoxInputs {

        display: flex;
        align-items: center;
        width: 37.5rem;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .input {
        width: 17.6rem;
        height: 2.2rem;
        width: 17.6rem;
        border: none;
        font-family: 'inter';
        font-weight: 400;
        border: none;
        ::placeholder{
            color: yellow;
            padding-left: 10px;

        }
    }
    
    .inputP {
        font-weight: 400;
        font-size: medium;
        border: none;
        width: 17.6rem;
        padding: 7px 13px;
        height: 2.2rem;
        border: none;
        
    }

    .input:last-child {
        padding: 0;
    }
    
    .input::placeholder {
        font-weight: 600;
        color: #A7A7A7;
    }

    .inputP:required {
        border: none;
    }
    .inputP:required:invalid {
        content: "Por favor, preencha este campo.";
        border: red 1px solid;
        display: block;
        margin-top: 5px;
    }
    .inputP:required:valid {
        border: 2px solid #10A0E6;
    }
    
    .BoxButtons {
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 12rem;
        gap: 0.5rem;
    }

    .button{
        width: 10rem;
        height: 3.2rem;
        border: none;
        background: #10A0E6;
        color: white;
        font-weight: 500;
        font-size: 1rem;
        border-radius: 0.2rem;
        cursor: pointer;
    }

    .button:hover{
        color: #10A0E6;
        background: white;
        border: solid 2px #10A0E6;
    }
    
    


`

export const BoxTable = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 18rem;
    margin-top: 3rem;

    overflow: auto;

`


