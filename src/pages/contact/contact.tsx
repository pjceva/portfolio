import { Screen } from "../../components/Screen/styles"
import { Email, Name, Message, Container, SendButton } from "./styles"

export const Contact = () => {
    return (
        <Screen id="Contact">
        <span className="h1">Contact</span>

        <Container>
            <Name placeholder="Name" />
            <Email placeholder="Email" />
            <Message placeholder="Message" />
            <SendButton>Send</SendButton>
        </Container>
        </Screen>
    )
}