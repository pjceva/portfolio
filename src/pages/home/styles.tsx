import styled from "styled-components";

export const Navbar = styled.section`
    height: 5vh;
    display: flex;
    width: 100%;
    background-color: black;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    /* padding: 0 50px; */
    a{
        font-family: "Ubuntu";
        font-size: 23px;
        font-weight: 400;
        cursor: pointer;
        :visited{
            text-decoration: none;
            color: white;
        }
        :link{
            text-decoration: none;
            color: white;
        }
        :hover{
            color: orange;
        }

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