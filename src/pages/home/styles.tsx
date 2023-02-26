import styled from "styled-components";

export const Navbar = styled.section`
    height: 3em;
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