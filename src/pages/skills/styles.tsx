import styled from "styled-components";
import python from "../../imgs/python.png"
import react from "../../imgs/react.png"
import git from "../../imgs/git.png"

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
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: gray; */
    overflow: hidden;

    div{
        height: 40%;
        width: 30%;
        background-image: url(${python});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        cursor: pointer;
        transition: 1s;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(245, 245, 245, 0.35);


    }
    .react{
        background-image: url(${react});
    }
    .git{
        background-image: url(${git});
    }
    
`
