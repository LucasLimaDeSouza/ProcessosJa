import styled from "styled-components";


export const Header = styled.header`

    width: 100%;
    height: 5.5rem;
    background: white;
    padding: 0 6.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .userCamp {
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .avatarUser {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        
    }

    .userName {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }

    .exit {
        display: flex;
        gap: 2rem;
    }

`