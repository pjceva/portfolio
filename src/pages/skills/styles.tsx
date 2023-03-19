import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    max-width: 19%;
    height: 30vh;
    border-radius: 10px;
    margin: 0 7.1%;
    /* overflow: hidden;
    :hover{
        border: 1px solid orange;
    } */
    img{
        width: 100%;
        border-radius: 10px;
        transition: 0.5s;
        :hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

`
