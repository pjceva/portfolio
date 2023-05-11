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
        width: 15%;
        font-size: 18.5px;
    }
    .nineteen{
        margin-left: 10%;
    }
    .twenty{
        margin-left: 31%;
    }
    .twenty-one{
        margin-left: 33%;
    }
    .twenty-two{
        margin-left: 37%;
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
