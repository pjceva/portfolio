import { Screen } from "../../components/Screen/styles"
import { Container, UText } from "./styles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


export const Trajectory = () =>{
    return (
        <Screen id="Trajectory">
            <span className="h1">Trajectory</span>
            <Container>
                <UText>
                    <div className="up">
                        <motion.span variants={fadeIn('right', 0.5)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.7}}
                        className="nineteen">
                            Started studying Computer Engineering
                            at Universidade de Brasília
                        </motion.span>
                        <motion.span variants={fadeIn('left', 0.5)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.1}}
                        className="twenty-one">
                            Learned Web-Development and started
                            working as a full Stack Developer at 
                            Struct-EJ
                        </motion.span>
                    </div>
                </UText>
                <motion.div variants={fadeIn('down', 0.2)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}>
                    
                    <div className="line">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    </motion.div>
                <div>
                    <div className="year">
                        <motion.span variants={fadeIn('up', 1)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}>2019</motion.span>
                        <motion.span variants={fadeIn('up', 1.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}>2020</motion.span>
                        <motion.span variants={fadeIn('up', 1.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}>2021</motion.span>
                        <motion.span variants={fadeIn('up', 1.8)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: true, amount: 0.1}}>2022</motion.span>
                    </div>
                </div>
                <UText>
                    <div className="bottom">
                        <motion.span variants={fadeIn('right', 0.5)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.7}}
                        className="twenty">
                            Harvard cs50 and Database course
                        </motion.span>
                        <motion.span variants={fadeIn('left', 0.5)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{once: true, amount: 0.1}} 
                        className="twenty-two">
                            Started my first internship =)
                        </motion.span>
                    </div>
                
                </UText>
            </Container>
        </Screen>
    )
}