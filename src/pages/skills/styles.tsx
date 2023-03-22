import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    max-width: 19%;
    height: 30vh;
    border-radius: 10px;
    margin: 0 7.1%;
    overflow: hidden;
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

export const Container = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    /* transform: translate(-50%, -50%); */
    overflow: hidden;

    .Img1{
        height: 40%;
        width: 30%;
        background-image: url(python.png)
    }
    
`
