import styled from "styled-components";

export const RegisterContainer = styled.div`

    height: 100vh;
    background: #CD2026;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #CD2026;
    
    .content {
        width: 30%;
        height: 50%;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-end;
        justify-content: center;
    }
    input, button {
        border: 1px solid #78290f;
        border-radius: 0.5rem;
    }
    
    input {
        width: 80%;
        height: 3rem;
        padding-left: 1rem;
        background: white;
        color: #78290f;
        ::placeholder{
            font-size: 1rem;
            font-weight: bold;
        }
    }

    a {
        color: #fff;
        cursor: pointer;
        :hover{
            color: #78290f;
        }
    }

    .boxButton{
        display: flex;
        gap: 1.5rem;
        width: 80%;
        align-items: center;
        justify-content: space-between;
    }
    button {
        width: 80%;
        height: 3rem;
        background: white;
        color: #78290f;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;

        /* ::placeholder{
            font-size: 1rem;
        } */
        :hover {
            background: #CD2026;
            border: #fff solid 2px;
            color: white;
        }
    }

    /* h1 {
        text-shadow: 2px 2px 1px #78290f;
    } */

    .boxName {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 20rem;
        background: white;
        border-left: 8px solid red;
        border-right: 8px solid red;
    }
    img {
        width: 8rem;
    }
`