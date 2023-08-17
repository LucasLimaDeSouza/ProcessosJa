import styled from "styled-components"

export const MainStyles = styled.main`
    width: 100%;
    height: 100vh;
    padding: 0 6.6rem;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    border: none;

    @media (max-width: 768px) {
    /* Adicione aqui os estilos para dispositivos móveis */
    .exclusive {
      display: flex; /* Oculta o conteúdo do site em dispositivos móveis */
    }
  }
    

`    

