import styled from "styled-components";

export const ResetContainer = styled.div`

    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    
    .resetBox {
        width: 80%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 1.5rem;
    }

    .logoReset {
        width: 50px;    
    }

    input, button {
        border: 3px solid red;
        border-radius: 0.5rem;
        height: 3rem;
    }
    
    input {
        width: 30%;
        padding-left: 1rem;
        background: white;
        color: red;
        ::placeholder{
            font-size: 1rem;
            font-weight: bold;
        }
    }
    
    button {
        width: 100%;
        background: red;
        color: white;
        font-size: large;
        cursor: pointer;
        :hover{
            background: white;
            color: red;
        }

    }
    button:last-child {
        width: 100%;
        background: white;
        color: black;
        font-size: large;
        border: 3px solid black;
        cursor: pointer;
        :hover{
            background: white;
            border: 3px solid red;
            color: red;
        }

    }

    .buttonBox {
        width: 30%;

        display: flex;
        margin-top: 1rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
    }

    .alertSuccess {
        color: green;
    }

` 