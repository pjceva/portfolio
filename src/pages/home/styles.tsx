import styled from "styled-components";

// export const Navbar = styled.section`
//     height: 5vh;
//     display: flex;
//     width: 100%;
//     background-color: black;
//     justify-content: space-around;
//     align-items: center;
//     position: fixed;
//     /* padding: 0 50px; */
//     a{
//         font-family: "Ubuntu";
//         font-size: 23px;
//         font-weight: 400;
//         cursor: pointer;
//         :visited{
//             text-decoration: none;
//             color: white;
//         }
//         :link{
//             text-decoration: none;
//             color: white;
//         }
//         :hover{
//             color: orange;
//         }

//     }
    
// `

export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 1rem;
        :hover{
            color: orange;
        }
    }
    
    /* background-color: green; */


    @media (max-width: 900px){
        .li{
            display: none;
        }
        .menu_btn{
            display: block;
        }
    }
`
export const DropDown = styled.div`
    position: absolute;
    display: none;
    right: 2rem;
    top: 60px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;

    li{
        padding: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
     
`

export const Logo = styled.div`
    
`

export const Links = styled.ul`
    display: flex;
    gap: 2rem;
    
`

export const MenuButton = styled.div`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
`

export const Container = styled.section`
    min-height: 95vh;
    display: flex;
    /* background-color: gray; */
    align-items: center;
    padding: 0 20%;
    
`

export const TextBox = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span{
        font-size: 30px;
    }

`

export const Perfil = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;    
    img{width: 25vh}
    
`



