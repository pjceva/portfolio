import { Container, Header, Links, MenuButton, Navbar, Perfil, TextBox } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { Content } from "../../components/Content/styles"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"


export const Home = () => {
    
    const [navbar, setNavbar] = useState(true)

    const showNavbar = () => setNavbar(!navbar)

    return (
        <>
            <Header>
                <Navbar>
                    <div className="logo">PZE</div>
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
                </Navbar>
            </Header>
                
            <Container id="Home">
                <Content>
                    <TextBox>
                        <span className="h1">
                        <TypeAnimation sequence={[
                            "Welcome",
                            3500,
                            "I'm Pedro José Rodrigues",
                            2000,
                            "I'm a Full Stack developer!",

                        ]}
                        speed={60}
                        repeat={0}
                        />
                        </span> 
                        <span>My goal is to learn as much as I can
                              by practicing, doing projects,
                              and making friends along the way.
                        </span>
                        <span>I dream of becoming part of a company </span>
                        
                    </TextBox>
                    <Perfil>
                        <div>
                        <img src={PerfilImg} />
                        </div>
                    </Perfil>
                    
                </Content>
            </Container>
        </>
    )
}