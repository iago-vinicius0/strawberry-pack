import BannerPrincipal from "../../images/BannerPrincipal.jpg";
import BannerPrincipalMobile from "../../images/BannerPrincipalMobile.jpg"
import { Container } from "./styles";

export default function Home() {

  return (
    <Container backImage={BannerPrincipal} backImageMobile={BannerPrincipalMobile}/>
  );
}
