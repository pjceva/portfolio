import { Card } from "../../components/Cards/styles"
import { Content } from "../../components/Content/styles"
import { Screen } from "../../components/Screen/styles"
import perfil from "../../imgs/perfil.png"

export const Skills = () => {
    return (
        <Screen>
            <span className="h1">What did I learn?</span>
            <Content>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>
                <Card><img src={perfil}/></Card>


            </Content>
        </Screen>
    )
}