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
    padding: 1rem 0;
    /* background-color: gray; */
    overflow: hidden;

    @media (max-width: 520px){
            height: 90vh;
        }

    div{
        height: 40%;
        width: 30%;
        /* background-image: url(${python}); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        cursor: pointer;
        transition: 0.7s;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(245, 245, 245, 0.35);

        :hover .about{
            position: relative;
            top:0;
            left: 0;
            cursor: pointer;
        }

        .about{
            position: relative;
            top: 0;
            left: -411px;
            background-color: rgba(0,0,0,0.7);
            height: 100%;
            width: 100%;
            padding: 0 10px;
        }

        @media (max-width: 950px){
            height: 30%;
            width: 40%;
            h1{
                font-size: 1.3rem;
            }
            span{
                font-size: 0.9rem;
            }
        }
        @media (max-width: 520px){
            width: 90%;
            height: 15%;
            box-shadow: 1px 3px 10px rgba(245, 245, 245, 0.35);
            h1{
                font-size: 1rem;
            }
            span{
                font-size: 0.85rem;
            }
        }

    }
    .python{
        background-image: url(${python});
    }
    .react{
        background-image: url(${react});
    }
    .git{
        background-image: url(${git});
    }
    
`
