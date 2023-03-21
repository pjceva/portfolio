import styled from "styled-components";

export const Content = styled.section`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background-color: gray; */
    
    span {font-size: 30px;}
    img {width: 25vh;}
    @media (max-width: 1086px) {
        img{
            display: none;
        }
    }
    @media (max-width: 825px) {
        span{
            font-size: 20px;
        }
    }

`

export const Title = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: white; */

`








export const Container = styled.section`
    min-height: 95vh;
    display: flex;
    /* background-color: gray; */
    align-items: center;
    padding: 0 20%;
    
`

export const TextBox = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span{
        font-size: 30px;
    }

`

export const Perfil = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;    
    img{width: 25vh}
    
`
