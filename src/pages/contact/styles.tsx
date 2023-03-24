import styled from "styled-components";

// export const Container = styled.section`
//     height: 56.5vh;
//     background-color: black;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     /* background-color: gray; */
    
// `

// export const Name = styled.input`
//     width: 60%;
//     height: 3vh;
//     margin-top: 5vh;
//     border: none;
//     border-radius: 5px;
// `

// export const Email = styled.input`
//     width: 60%;
//     margin-top: 2vh;
//     height: 3vh;
//     border: none;
//     border-radius: 5px;

// `

// export const Message = styled.input`
//     width: 60%;
//     height: 40vh;
//     margin-top: 3vh;
//     border: none;
//     border-radius: 5px;
    
// `

// export const SendButton = styled.button`
//     margin-top: 2.5vh;
//     width: 15%;
//     min-width: 50px;
//     height: 3vh;
//     border-radius: 5px;
//     background-color: #AEA1EA;
//     border: none;
//     cursor: pointer;
//     font-family: 'Ubuntu';
//     margin-bottom: 2vh;
//     color: black;

// `

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* background-color: gray; */
    .contact-left{
        flex: 1.5;
        /* flex-basis: 35%; */
        p{
            margin-top: 30px;
            i{
                color: #AEA1EA;
                margin-right: 15px;
                font-size: 25px;
            }
        }
    }
    .contact-right{
        flex: 2;
        /* flex-basis: 60%; */
        form{
            width: 100%;
            input, textarea{
                width: 100%;
                border: 0px;
                outline: none;
                background: #262626;
                padding: 15px;
                margin: 15px 0;
                color: #fff;
                font-size: 18px;
                border-radius: 6px;
            }
        }
    }

    .social-icons{
        margin-top: 30px;
        a{
            text-decoration: none;
            font-size: 30px;
            margin-right: 15px;
            color: #ababab;
            display: inline-block;
            transition: transform 0.5s;
            :hover{
                color: #AEA1EA;
                transform: translateY(-5px)
            }
        }
    }

    .btn2{
        display: inline-block;
    }
    
`
