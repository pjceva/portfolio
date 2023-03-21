import { Container, Content, Perfil, TextBox, Title } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { TypeAnimation } from "react-type-animation"
import { Navbar } from "../../components/Navbar"
import { Screen } from "../../components/Screen/styles"

export const Home = () => {

    return (
        <>
            <Navbar />
            <Screen>
                <Content>
                    <div>
                        <Title>
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
                        </Title>
                        
                        <span>My goal is to learn as much as I can
                              by practicing, doing projects,
                              and making friends along the way. 
                              I dream of becoming part of a company
                        </span>
                    </div>
                    <img src={PerfilImg} />
                </Content>
            </Screen>
            {/* <Container id="Home">
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
            </Container> */}
        </>
    )
}