import { Screen } from "../../components/Screen/styles"
import { Container } from "./styles"
import python from "../../imgs/python.png"
import reactjs from "../../imgs/react.png"
import github from "../../imgs/git.png"
import rails from "../../imgs/rails.png"

export const Skills = () => {
    return (
        <Screen id="Skill">
            
            <span className="h1">What did I learn?</span>
            <Container>
                <div className="python">
                    <div className="about">
                        <h1>Python</h1>
                        <span>Meu primeiro contato com python foi 
                            no curso CS50 de harvard. Desde então 
                            é a minha linguagem favorita...
                        </span>
                    </div>

                </div>
                <div className="react">
                    <div className="about">
                        <h1>React</h1>
                    </div>
                </div>
                <div className="git">
                    <div className="about">
                        <h1>Git</h1>
                    </div>
                </div>
                <div className="python"></div>
                <div className="react"></div>
                <div className="python"></div>
            </Container>
        </Screen>
    )
}