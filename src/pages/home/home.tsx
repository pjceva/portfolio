import { Container, Navbar, Perfil, TextBox } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { Content } from "../../components/Content/styles"
import { TypeAnimation } from "react-type-animation"


export const Home = () => {
    return (
        <>
            <Navbar>
                <a href="#Home">Home</a>
                <a href="#Skill">Skills</a>
                <a>Trajectory</a>
                {/* <a>About Me</a> */}
                <a>Contact</a>
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
                        speed={50}
                        repeat={Infinity}
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