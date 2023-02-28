import styled from "styled-components";

export const Navbar = styled.section`
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    a{
        font-size: 23px;
        font-weight: 400;
        cursor: pointer;
    }
    a:hover{
        color: orange;
    }
`
export const Container = styled.section`
    height: 95vh;
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