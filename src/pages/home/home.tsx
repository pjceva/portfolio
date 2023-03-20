import { Container, Perfil, TextBox } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { Content } from "../../components/Content/styles"
import { TypeAnimation } from "react-type-animation"
import { Navbar } from "../../components/Navbar"

export const Home = () => {

    return (
        <>
            <Navbar />
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