import { Content, ImgBox, Perfil, TextBox, Title } from "./styles"
import PerfilImg from "../../imgs/perfil.png"
import { TypeAnimation } from "react-type-animation"
import { Navbar } from "../../components/Navbar"
import { Screen } from "../../components/Screen/styles"

export const Home = () => {

    return (
        <>
            <Navbar />
            <Screen id="Home">
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
                <Content>
                    <TextBox>
                        <span>
                        orem ipsum dolor sit amet, consectetur adi
                        piscing elit, sed do eiusmod tempor incidid
                        unt ut labore et dolore magna aliqua. Ut enim a
                        d minim veniam, quis nostrud exercitation ullamco labo
                        ris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in volup
                        ate est laborum.
                        </span>
                    </TextBox>
                    <ImgBox>
                        {/* <img src={PerfilImg} /> */}
                        {/* <Perfil/> */}
                        <div className="container">
                            <div className="card">
                                <div className="front"></div>  

                                <div className="back">
                                    <span>Hobbies</span>
                                    <li>Soccer </li>
                                    <li>Travel</li>
                                    <li>Any games</li>
                                    <li>Horror Movies</li>
                                    <li>Outside activities</li>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </ImgBox>
                </Content>
            </Screen>
        </>
    )
}