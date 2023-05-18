import { Content, ImgBox, TextBox, Title } from "./styles"
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
                        I'm 23 years old, studying Computer Engineering at 
                        Universidade de Brasília (UnB).
                        <p>My goal is to be part of a development 
                        team where I can 
                        demonstrate my skills, solve problems and, 
                        in the future, earn 
                        my permanence in the company by being hired.
                        </p>
                        </span>
                    </TextBox>
                    <ImgBox>
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