import styled from "styled-components";

export const Content = styled.section`
    max-width: 1200px;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background-color: gray; */
    
    span {font-size: 30px;}
    img {
        max-width: auto;
        height: 250px;
        display: block;
        opacity: 0.75;
    }
    
    @media (max-width: 640px) {
        span{
            font-size: 25px;
        }
    }
    @media (max-width: 400px) {
        span{
            font-size: 20px;
        }
    }

`

export const Title = styled.div`
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 400px) {
        height: 4rem;
    }

`

export const TextBox = styled.div`
    display: flex;
    flex: 2;
`

export const ImgBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    /* background-color: white; */
    @media (max-width: 1086px){
        display: none;
    }

`
