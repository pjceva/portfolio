import { Screen } from "../../components/Screen/styles"
import { Container, Line, UText } from "./styles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


export const Trajectory = () =>{
    return (
        <Screen id="Trajectory">
            <span className="h1">Trajectory</span>
            <Container>
                <UText>
                    <motion.span variants={fadeIn('right', 0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.7}}
                    className="nineteen">
                        Started studying computer engeneering
                        at Universidade de Brasília
                    </motion.span>
                    <motion.span variants={fadeIn('right', 0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.7}}
                    className="twenty">
                        Harvard cs50 and Database course
                    </motion.span>
                </UText>

                <Line>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                </Line>
                <div className="year">
                    <span>2019</span>
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                </div>

                <UText>
                    <motion.span variants={fadeIn('left', 0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}
                    className="twenty-one">
                        Learned Web-Development and started
                        working as a full Stack Developer at 
                        Struct-EJ
                    </motion.span>
                    <motion.span variants={fadeIn('left', 0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}} 
                    className="twenty-two">
                        Started my first internship =)
                    </motion.span>
                </UText>
            </Container>
        </Screen>
    )
}