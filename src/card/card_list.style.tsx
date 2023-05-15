import  styled  from "styled-components";


export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 20px;
    text-align:center;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;

    &:hover {
        transform: scale(1.05);
      }
`
