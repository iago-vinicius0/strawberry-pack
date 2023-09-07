import authenticgamesImage from "../../images/authenticgamesImage.jpg";
import baixamemoriaImage from "../../images/baixamemoriaImage.jpg";
import belgarenanImage from "../../images/belgasImage.jpg";
import coreanoricoImage from "../../images/coreanoricoImage.jpeg";
import deniImage from "../../images/deniImage.jpg";
import gabrielaronesImage from "../../images/gabrielaronesImage.jpg";
import pmmImage from "../../images/pmmImage.jpeg";
import wobrunoImage from "../../images/wobrunoImage.jpg";
import wuantgamesImage from "../../images/wuantImage.jpg";
import t3ddyImage from "../../images/t3ddyImage.jpg";
import BackgroundImage from "../../images/CenterBackgroundImage.jpg";

import { Container, ImagesBox, ImagesContainer, Title } from "./styles";

export default function Youtubers() {

  const Images = [
    {
      name: "Authentic Games",
      image: authenticgamesImage,
      text: "+ 20,1 Milhões",
    },
    { name: "T3ddy", image: t3ddyImage, text: "+ 16,3 Milhões" },
    { name: "Baixa Memória", image: baixamemoriaImage, text: "+ 5,39 Milhões" },
    { name: "Wuant", image: wuantgamesImage, text: "+ 3,7 Milhões" },
    { name: "Plano Belgas", image: belgarenanImage, text: "+ 2,1 Milhões" },
    { name: "Deni", image: deniImage, text: "+ 2,05 Milhões" },
    {
      name: "Gabriel Arones",
      image: gabrielaronesImage,
      text: "+ 1,16 Milhões",
    },
    { name: "PMM", image: pmmImage, text: "+ 752 Mil" },
    { name: "Coreano Rico", image: coreanoricoImage, text: "+ 631 Mil" },
    { name: "Bruno Oliveira", image: wobrunoImage, text: "+ 73,3 Mil" },
  ];

  return (
    <Container backImage={BackgroundImage}>
        <>
          <Title>
            <p>
              Conheça agora alguns <span className="red">canais</span>
            </p>
            <p>
              que utilizam nossos <span className="red">packs!</span>
            </p>
          </Title>
          <ImagesBox>
            {Images.map((item: any, key: number) => (
              <ImagesContainer key={key}>
                <img src={item.image} alt="" width={200} height={200} />
                <p>{item.name}</p>
                <span>{item.text}</span>
              </ImagesContainer>
            ))}
          </ImagesBox>
        </>
    </Container>
  );
}
