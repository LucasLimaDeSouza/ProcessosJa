import styled from "styled-components";

// interface CardBoxProps {
//     id: string | number;
//     className?: string;
//     onClick?: () => void;
//     numbers: string;
//     system: string;
//     instancie: string;
//     status: string;
    
//   }

export const CardBox = styled.tr`

display: flex;
justify-content: center;
align-items: center;
/* gap: 2.5rem; */
margin-top: 0.5rem;
background: white;
width: 100%;
border-radius: 8.5rem;
cursor: pointer;

:hover {
    border: solid 1px #10A0E6;
}

td {
    width: 20.5%;
    padding: 0.7rem 2.5rem;
}

td:first-child {
    width: 39%;
}
td:last-child {
    width: 16%;
}

.deleteButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
}

.yellow {
    color: #F0AD4E;
    font-weight: 400;
    font-size: 18px;
    /* -webkit-text-stroke: 0.1px black; */
}
.green {
    color: #00AB66;
    font-weight: 400;
    font-size: 18px;
    /* -webkit-text-stroke: 0.1px black; */
}
.red {
    color: #D9534F;
    font-weight: 400;
    font-size: 18px;
    /* -webkit-text-stroke: 0.1px black; */
}

    
`