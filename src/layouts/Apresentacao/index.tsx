import apenasUmClick from "../../images/apenasUmClick.png";
import {
  ApresentationContent,
  ApresentationText,
  Container,
  ApenasUmClick,
  VideoContainer,
  VideoTitle,
} from "./styles";
import BackgroundImage from "../../images/LeftBackgroundImage.jpg";

export default function Apresentacao() {
  return (
    <Container backImage={BackgroundImage}>
      <VideoTitle>ASSISTA A DEMONSTRAÇÃO</VideoTitle>
      <ApresentationContent>
        <>
          <VideoContainer>
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/_J4hYGI-iXI?si=og6vb0YeFuSDV7Dp?rel=0?version=3&autoplay=1&&showinfo=0&loop=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder={0}
              allowFullScreen={true}
            />
          </VideoContainer>
          <ApenasUmClick backImage={apenasUmClick}>
            <img src={apenasUmClick} alt="" width={100} height={100} />
          </ApenasUmClick>
        </>
      </ApresentationContent>
      <ApresentationText>
        <p>
          O <span className="green">melhor e mais completo</span> pack do
          mercado, contando com mais de <span className="red">4.000 itens</span>{" "}
          para evoluir e contribuir sua edição.
        </p>
        <p>
          Acelere seu jeito de editar em até <span className="green">10x</span>,
          ganhando <span className="green">tempo, qualidade e agilidade</span>{" "}
          na suas edições.
        </p>
        <p>
          Você <span className="red-grifado">nunca mais</span> gastará seu tempo
          criando efeitos para editar vídeos.
        </p>
      </ApresentationText>
    </Container>
  );
}
