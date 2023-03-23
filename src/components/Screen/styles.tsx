import styled from "styled-components";

export const Screen = styled.section`
    display: flex;
    max-width: 1200px;
    min-height: 100vh;
    flex-direction: column;
    padding: 0 20%;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 950px) {
        padding: 0 10%;
    }
`