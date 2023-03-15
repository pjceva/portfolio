import { Container, DropDown, Links, Logo, MenuButton, Navbar, Perfil, TextBox } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { Content } from "../../components/Content/styles"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"


export const Home = () => {

    return (
        <>
            {/* <Navbar>
                <a href="#Home">Home</a>
                <a href="#Skill">Skills</a>
                <a>Trajectory</a>
                <a>About Me</a>
                <a href="#Contact">Contact</a>
            </Navbar> */}
            <Navbar>
                <Logo>PZE</Logo>
                <Links className="li">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skill">Skills</a></li>
                    <li><a href="#Trajectory">Trajectory</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </Links>
                <MenuButton className="menu_btn">
                    <i className="fa-solid fa-bars"></i>
                </MenuButton>
                <DropDown>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skill">Skills</a></li>
                    <li><a href="#Trajectory">Trajectory</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </DropDown>
            </Navbar>
            <Container id="Home">
                <Content>
                    <TextBox>
                        <span className="h1">
                        <TypeAnimation sequence={[
                            "Hi! I'm Pedro José!",
                            2000,
                            "I'm a Full Stack developer!",
                            2000,
                        ]}
                        speed={65}
                        repeat={2}
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