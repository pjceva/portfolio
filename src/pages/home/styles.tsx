import styled from "styled-components";
import PerfilImg from "../../imgs/perfil.png"
import pze from "../../imgs/pze.png"

export const Content = styled.section`
    max-width: 1200px;
    height: 40lvh;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    gap: 1rem;

    .container{
        height: 320px;
        width: 220px;
    }
    
    .container:hover > .card{
            cursor: pointer;
            transform: rotateY(180deg)
        }

    .card{
        height: 100%;
        width: 100%;
        position: relative;
        transition: transform 1200ms;
        transform-style: preserve-3d;
    }

    .front,
    .back{
        height: 100%;
        width: 100%;
        border-radius: 7px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        box-shadow: 0px 0px 5px rgba(245, 245, 245, 0.45);
        position: absolute;
        backface-visibility: hidden;
    }

    .front{
        background-image: url(${PerfilImg});
        
    }

    .back{
        background-color: #262626;
        transform: rotatey(180deg);
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 2rem;
        span{
            margin: 0 auto;
        }
        li{
            padding-left: 10px;
        }
    }
     

`

export const Title = styled.div`
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-top: 2rem; */

`

export const TextBox = styled.div`
    display: flex;
    flex: 2;
    /* margin: auto 0; */
`

export const ImgBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    @media (max-width: 640px) {
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
