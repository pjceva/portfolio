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
            color: #AEA1EA;
        }
        span{
            font-size: 25px;
        }
        .btn{
            display: block;
            margin: 50px auto;
            width: fit-content;
            border: 1px solid #AEA1EA;
            padding: 14px 50px;
            border-radius: 6px;
            text-decoration: none;
            color: #fff;
            transition: background 0.5s;
            :hover{
                background: #AEA1EA;
                cursor: pointer;
            }
        }

        .black{
            background: black;
        }
        
        ::-webkit-scrollbar {
        width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.35);
            border-radius: 10px;
            
        }


        @media (max-width: 640px) {
            .h1{
                font-size: 35px;
            }
            span{
                font-size: 20px;
            }
            
        }
        @media (max-width: 305px){
            .h1{
                font-size: 25px;
            }
            span{
                font-size: 16px;
            }
        }
    }
    

`