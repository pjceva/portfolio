import { Screen } from "../../components/Screen/styles"
import { Container } from "./styles"
import CV from "../../imgs/CurriculoPedroJose.pdf"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
//MutableRefObject<undefined>

export const Contact = () =>{
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const currentForm = form.current
        if (currentForm == null) return;

        emailjs.sendForm('service_53vlwnj', 'template_2fxiypd', currentForm, 'NkaXsl4fwV4nU_ad3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

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
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" name="name" placeholder="Your name" required />
                                <input type="email" name="email" placeholder="Your email" required/>
                                <textarea name="message" rows={6} placeholder="Your message"></textarea>
                                <button type="submit" value="Send" className="btn black btn2">Submit</button>
                            </form>
                            
                        </div>
                    
                </Container>
        </Screen>
    )
}
