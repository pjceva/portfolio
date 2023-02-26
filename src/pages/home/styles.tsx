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
    justify-content: center;
    align-items: center;
`

export const InfoBox = styled.div`
    width: 60%;
    /* background-color: gray; */
    height: 70vh;
    color: white;
    display: flex;
    img {
        width: 60%;
        padding: 0 12vh;
    }
`

export const TextBox = styled.div`
    width: 60%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    span{
        font-size: 30px;
    }

    .h1{
        font-size: 40px;
        color: orange;
    }
`