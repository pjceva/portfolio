import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    height: 60vh;
    display: flex;
    flex-direction: column;

    .year{
        margin-top: 17px;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
    }
`

export const UText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    span{
        max-width: 17%;
        font-size: 20px;
    }
    .nineteen{
        margin-left: 5%;
    }
    .twenty{
        margin-left: 35%;
    }
    .twenty-one{
        margin-left: 30%;
    }
    .twenty-two{
        margin-left: 35%;
    }

`

export const Line = styled.section`

    background-color: white;
    height: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        position: relative;
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 50px;
    }
`
