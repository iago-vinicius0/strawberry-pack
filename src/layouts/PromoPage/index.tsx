import { Banner, BannerButton, Container } from "./styles";
import BackgroundImage from "../../images/firstBackImage.jpg";
import BannerPromoDesktop from "../../images/BannerPromo.jpg"
import BannerPromoMobile from "../../images/BannerPromoMobile.jpg"

export default function PromoPage() {
  return (
    <Container backImage={BackgroundImage}>
        <Banner backImage={BannerPromoDesktop} backImageMobile={BannerPromoMobile}>
          <BannerButton><a href="https://pay.kiwify.com.br/9THIvaN" rel="noreferrer" target="_blank">ADQUIRA AGORA</a></BannerButton>
          <p>Compra 100% segura via Kiwify</p>
        </Banner>
    </Container>
  );
}
