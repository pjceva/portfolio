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
        span{
            font-size: 18px;
        }
        @media (max-width: 640px){
            span{
                font-size: 15px;
            }
        }
        @media (max-width: 480px){
            span{
                font-size: 13px;
            }
            
        }

    }

    .line{
        background-color: white;
        height: 2px;
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
        @media (max-width: 950px){
            div{
                width: 17px;
                height: 17px;
            }
        }
        @media (max-width: 640px){
            height: 1.5px;
            div{
                width: 15px;
                height: 15px;
            }
        }
        @media (max-width: 640px){
            div{
                width: 13px;
                height: 13px;
            }
        }
        
    }

`

export const UText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    span{
        width: 18%;
        font-size: 18px;
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
        margin-left: 35%;
    }

    @media (max-width: 950px){
        span{
            font-size: 15px;
        }
    }

    @media (max-width: 640px){
        span{
            font-size: 13px;
        }
    }

    @media (max-width: 480px){
        span{
            width: 25%;
            font-size: 11px;
        }
        .nineteen{
            margin-left: 12%;
        }
        .twenty{
            margin-left: 30%;
        }
        .twenty-one{
            margin-left: 23%;
        }
        .twenty-two{
            margin-left: 30%;
        }
    }
    

`
