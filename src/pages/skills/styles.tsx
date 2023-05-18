import styled from "styled-components";
import python from "../../imgs/teste-python.jpeg"
import react from "../../imgs/teste-react.jpeg"
import git from "../../imgs/teste-git.jpeg"
import rails from "../../imgs/teste-rails.jpeg"
import rails2 from "../../imgs/teste2-rails.jpeg"
import react2 from "../../imgs/teste2-react.jpeg"
import mysql from "../../imgs/teste-mysql.jpeg"
import automation from "../../imgs/automation.jpeg"

export const Container = styled.div`
    max-width: 1200px;
    height: 60vh;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 3px;
    /* padding: 1rem 0; */
    /* background-color: gray; */
    overflow: hidden;
    @media (max-width: 580px){
        height: 130vh;
    }

    

    div{
        height: 40%;
        width: 30%;
        min-width: 225px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        cursor: pointer;
        transition: 0.7s;
        border-radius: 7px;
        box-shadow: 0px 0px 5px rgba(245, 245, 245, 0.35);
        position: relative;
        :hover .about{  
            top:0;
            left: 0;
        }


        .about{
            position: absolute;
            top: 0;
            left: -411px;
            background-color: rgba(0,0,0,0.7);
            height: 100%;
            width: 100%;

        }
        @media (max-width: 950px){
            height: 30%;
            width: 40%;
            h1{
                font-size: 16px;
                
            }
            p{
                font-size: 13.5px;
            }
        }
        @media (max-width: 580px){
            width: 90%;
            height: 15%;
            box-shadow: 1px 3px 10px rgba(245, 245, 245, 0.35);
        }
        @media (max-width: 300px){
            h1{
                font-size: 15px;
            }
            p{
                font-size: 12px;
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
    .rails{
        background-image: url(${rails});
    }
    .react2{
        background-image: url(${react2});
    }
    .mysql{
        background-image: url(${mysql});
    }
    .rails2{
        background-image: url(${rails2});
    }
    .automation{
        background-image: url(${automation});
    }
    
`
