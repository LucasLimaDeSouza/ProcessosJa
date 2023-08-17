import styled from "styled-components";

export const BoxLogin = styled.div`



    width: 100%;
    height: 100vh;

    display: flex;
    flex: 1;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;


    .boxButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 32px;
    }
    
    
    .button {
        height: 56px;
        width: 650px;

        background: none;
        font-size: 18px;

        border-width: 2px;
        border-radius: 0.5rem;
        border-style: solid;


        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

    }

    .button:hover {
        border: 2px solid red;
    }



    svg {
        font-size: 24px;
        margin-right: 10px;
    }

    b {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }


    .user {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;

    }


    .photo {
        width: 120px;
        height: 120px;
        border-radius: 70px;
        margin-bottom: 1.5rem;
    }

    

`