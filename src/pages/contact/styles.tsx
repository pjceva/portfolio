import styled from "styled-components";

export const Container = styled.section`
    height: 56.5vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: gray; */
    
`

export const Name = styled.input`
    width: 60%;
    height: 3vh;
    margin-top: 5vh;
    border: none;
    border-radius: 5px;
`

export const Email = styled.input`
    width: 60%;
    margin-top: 2vh;
    height: 3vh;
    border: none;
    border-radius: 5px;

`

export const Message = styled.input`
    width: 60%;
    height: 40vh;
    margin-top: 3vh;
    border: none;
    border-radius: 5px;
    
`

export const SendButton = styled.button`
    margin-top: 2.5vh;
    width: 15%;
    min-width: 50px;
    height: 3vh;
    border-radius: 5px;
    background-color: #AEA1EA;
    border: none;
    cursor: pointer;
    font-family: 'Ubuntu';
    margin-bottom: 2vh;
    color: black;

`
