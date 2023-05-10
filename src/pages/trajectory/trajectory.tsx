import { Screen } from "../../components/Screen/styles"
import { Container, Line, UText } from "./styles"

export const Trajectory = () =>{
    return (
        <Screen id="Trajectory">
            <span className="h1">Trajectory</span>
            <Container>
                <UText>
                    <span className="nineteen">
                        Started studying computer engeneering
                        at Universidade de Brasília
                    </span>
                    <span className="twenty">
                        Harvard cs50 and Database course
                    </span>
                </UText>

                <Line>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                </Line>

                <UText>
                    <span className="twenty-one">
                        Learned Web-Development and started
                        working as a full Stack Developer at 
                        Struct-EJ
                    </span>
                    <span className="twenty-two">
                        Started my first internship =)
                    </span>
                </UText>
            </Container>
        </Screen>
    )
}