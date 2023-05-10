
import { Screen } from "../../components/Screen/styles"
import { Container } from "./styles"


export const Skills = () => {
    return (
        <Screen id="Skill">
            
            <span className="h1">What did I learn?</span>
            <Container>
                <div className="python">
                    <div className="about">
                        <h1>Programing languages</h1>
                        <span>Python, Ruby, C, C++ and JavaScript are 
                            some of the programing languages I learned
                            during my journy in computer engeneering so far.
                        </span>
                    </div>

                </div>
                <div className="git">
                    <div className="about">
                        <h1>Git/Github</h1>
                        <span>
                            After completing a begginers course on Udemy,
                            I got in touch with Git and Github while working
                            as a Full Stack developer at Struct-EJ.
                        </span>
                        
                    </div>
                </div>
                <div className="react2">
                    <div className="about">
                        <h1>React</h1>
                        <span>
                            ReactJs is the technology I use the most
                            when developing the front-end of the projects
                            I'm in.
                        </span>
                    </div>
                </div>
                <div className="mysql">
                    <div className="about">
                        <h1>MySQL</h1>
                        <span>
                            I completed a basic MySQL course in 2020 and 
                            as an intern on Ministério da Justiça back in 2022
                            one of my jobs was to quickly search information in 
                            their databases via SQL commands.
                        </span>
                    </div>
                </div>
                <div className="rails2">
                    <div className="about">
                        <h1>Ruby on Rails</h1>
                        <span>
                            Ruby on Rails is the main technology I use when it comes
                            to devoloping the back-end of the projects I'm part of.
                        </span>
                    </div>
                </div>
                <div className="automation">
                    <div className="about">
                        <h1>Automation Testing</h1>
                        <span>
                            The first time I got in touch with automated testing was 
                            back in 2020 when I used catch2 on a C++ project.
                            Nowadays I frequently use RSPEC for automated testing on 
                            my Ruby on Rails projects.
                        </span>
                    </div>
                </div>
            </Container>

        </Screen>
    )
}