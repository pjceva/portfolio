import { Container, InfoBox, Navbar, TextBox } from "./styles"
import PerfilImg from "../../imgs/perfil.png"


export const Home = () => {
    return (
        <>
            <Navbar>
                <a>Home</a>
                <a>Skills</a>
                <a>Trajectory</a>
                {/* <a>About Me</a> */}
                <a>Contact</a>
            </Navbar>
            <Container>
                <InfoBox>
                    <TextBox>
                        <span>Hi! I'm Pedro José!</span>
                        <span className="h1">I'm a Full Stack developer!</span>
                        <span>My goal is to learn as much as I can
                              by practicing, doing projects,
                              and making friends along the way.
                        </span>
                        <span>I dream of becoming part of a company </span>
                        
                    </TextBox>
                    <div>
                        <img src={PerfilImg} />
                    </div>
                    
                    

                </InfoBox>
            </Container>
        </>
    )
}