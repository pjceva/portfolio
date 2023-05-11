import styled from "styled-components";
import PerfilImg from "../../imgs/perfil.png"
import pze from "../../imgs/pze.png"

export const Content = styled.section`
    max-width: 1200px;
    height: 40vh;
    display: flex;    
    /* border: 1px solid red; */
    
    span {font-size: 30px;}
    
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
    margin-top: 2rem;
    @media (max-width: 400px) {
        height: 4rem;
    }

`

export const TextBox = styled.div`
    display: flex;
    flex: 2;
    margin: auto 0;
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

export const Perfil = styled.div`
    background-image: url(${PerfilImg});
    height: 330px;
    width: 230px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 5px 10px 15px rgba(245, 245, 245, 0.35);
    margin: auto 0;

    .back{
        background-image: url(${pze});
    }
`
