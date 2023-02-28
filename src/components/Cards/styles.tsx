import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    width: 14rem;
    height: 18rem;
    border: 2px solid black;
    border-radius: 10px;
    margin: 2rem 3rem;
    overflow: hidden;
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
