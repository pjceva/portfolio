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
                <div className="Img1">
                    <div className="one">
                        <h1>Image 1</h1>
                    </div>

                </div>
                <div className="Img2">
                <div className="two">
                    <h1>Image 2</h1>
                </div>
                </div>
                <div className="Img3">
                    <div className="three">
                        <h1>Image 3</h1>
                    </div>
                </div>
            </Container>


            {/* <Content>
                <Card><img src={python}/></Card>
                <Card><img src={reactjs}/></Card>
                <Card><img src={github}/></Card>
                <Card><img src={rails}/></Card>
                <Card><img src={python}/></Card>
                <Card><img src={python}/></Card>
                
            </Content> */}
        </Screen>
    )
}