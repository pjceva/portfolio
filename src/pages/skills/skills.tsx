import { Content } from "../../components/Content/styles"
import { Screen } from "../../components/Screen/styles"
import { Card, Container } from "./styles"
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
                        <h1>Programing languages</h1>
                        <span>Meu primeiro contato com python foi 
                            no curso CS50 de harvard. Desde então 
                            é a minha linguagem favorita...
                        </span>
                    </div>

                </div>
                <div className="git">
                    <div className="about">
                        <h1>Git/Github</h1>
                    </div>
                </div>
                <div className="react2">
                    <div className="about">
                        <h1>React</h1>
                    </div>
                </div>
                <div className="mysql">
                    <div className="about">
                        <h1>MySql</h1>
                    </div>
                </div>
                <div className="rails2">
                    <div className="about">
                        <h1>Ruby on Rails</h1>
                    </div>
                </div>
                <div className="automation">
                    <div className="about">
                        <h1>Automation Testing</h1>
                    </div>
                </div>
            </Container>

        </Screen>
    )
}