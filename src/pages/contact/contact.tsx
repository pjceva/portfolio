// import { Screen } from "../../components/Screen/styles"
// import { Email, Name, Message, Container, SendButton } from "./styles"

import { Screen } from "../../components/Screen/styles"
import { Container } from "./styles"
import CV from "../../imgs/CVPedroJose.pdf"

// export const Contact = () => {
//     return (
//         <Screen id="Contact">
//         <span className="h1">Contact</span>

//         <Container>
//             <Name placeholder="Name" />
//             <Email placeholder="Email" />
//             <Message placeholder="Message" />
//             <SendButton>Send</SendButton>
//         </Container>
//         </Screen>
//     )
// }


export const Contact = () =>{
    return (
        <Screen>
                <Container id="Contact">
                        <div className="contact-left">
                            <span className="h1">Contact Me</span>
                            <p><i className="fas fa-paper-plane"></i>pjceva@gmail.com</p>
                            <p><i className="fas fa-phone-square-alt"></i>+55(61)98181-6045</p>
                            <div className="social-icons">
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/pedro-jos%C3%A9-monteiro-de-barros-ceva-rodrigues-66566522a/"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <a href={CV} download className="btn btn2">Download CV</a>
                        </div>
                        <div className="contact-right">
                            <form>
                                <input type="text" name="Name" placeholder="Your name" required />
                                <input type="email" name="email" placeholder="Your email" required/>
                                <textarea name="Message" rows={6} placeholder="Your message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    
                </Container>
        </Screen>
    )
}
