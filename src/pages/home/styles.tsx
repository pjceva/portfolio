import styled from "styled-components";

export const Content = styled.section`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    span{
        font-size: 30px;
    }
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
