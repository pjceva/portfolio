import { useState } from "react"
import { Container, Header, Links, MenuButton } from "./styles"
import logo from "../../imgs/logo.png"

export const Navbar = () => {
        
    const [navbar, setNavbar] = useState(true)

    const showNavbar = () => setNavbar(!navbar)
    
    return (
        <Header>
            <Container>
                <img className="logo" src={logo}/>
                <Links className="li">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skill">Skills</a></li>
                    <li><a href="#Trajectory">Trajectory</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </Links>
                <MenuButton className="menu_btn" onClick={showNavbar}>
                    <i className={navbar ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
                    {/* <i className="fa-solid fa-bars"></i> */}
                </MenuButton>
                    <section className={navbar ? "hide" : "show"}>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Skill">Skills</a></li>
                        <li><a href="#Trajectory">Trajectory</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </section>
            </Container>
        </Header>
    )
}