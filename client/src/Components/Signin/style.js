import styled from "styled-components";

export const LoginContainer = styled.div`

    height: 100vh;
    background: #fff;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: red;
    
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
        border: 3px solid red;
        border-radius: 0.5rem;
    }
    
    input {
        width: 80%;
        height: 3rem;
        padding-left: 1rem;
        background: white;
        color: red;
        ::placeholder{
            font-size: 1rem;
            font-weight: bold;
        }
    }

    a {
        color: red;
        cursor: pointer;
        :hover{
            color: #78290f;
        }
    }

    .resetBox {
        width: 80%;
        height: 3rem;
        font-size: large;

        display: flex;
        align-items: center;
        justify-content: center;


    }

    .boxButton{
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        width: 80%;
        justify-content: space-between;
    }
    button {
        width: 80%;
        height: 3rem;
        background: white;
        color: red;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;

        /* ::placeholder{
            font-size: 1rem;
        } */
        :hover {
            background: red;
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
        border-left: 20px dashed  #221b1b;
        border-right: 20px dashed red;
    }
    img {
        width: 8rem;
    }
`