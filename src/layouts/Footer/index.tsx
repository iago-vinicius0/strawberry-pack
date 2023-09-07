import { Container, EmailBox } from "./styles";
import Logo from "../../images/LogoBox.png"
import BackgroundImage from "../../images/CenterBackgroundImage.jpg";

export default function Footer() {
    return (
        <Container backImage={BackgroundImage}>
            <h1>Strawberry Pack ©2023 - Todos os direitos reservados</h1>
            <EmailBox>
                <a href="mailto: straw.berrysuporte@gmail.com">straw.berrysuporte@gmail.com</a>
            </EmailBox>
            <img src={Logo} alt="logo" width={60} height={60}/>
            <p>Desenvolvido por Iago Gomes</p>
        </Container>
    )
}