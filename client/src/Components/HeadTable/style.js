import styled from "styled-components";

export const Table = styled.tr`

    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 2.5rem;     */
    width: 98.5%;
    position: fixed;
    padding: 0 6.6rem;
    top: 19rem;
    
    th {
        background: white;
        border-radius: 8.5rem;
        display: flex;
        width: 20.5%;
        padding: 0.7rem 2rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }
    
    th:first-child {
        width: 38%;
    }
    th:last-child {
        width: 15%;
    }
    
    
`
