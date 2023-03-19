import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        background-color: black;
        color: white;
        .h1{
            font-size: 40px;
            color: orange;
        }
        ::-webkit-scrollbar {
        width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.35);
            border-radius: 10px;
        }
    }
    

`