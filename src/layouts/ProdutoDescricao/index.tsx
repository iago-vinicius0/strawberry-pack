import { Container, Content, ContentButton, Title } from "./styles";
import BackgroundImage from "../../images/RightBackgroundImage.jpg"

export default function ProdutoDescricao() {
  const items = [
    { title: "TEXTOS ANIMADOS E", subtitle: "LETRAS PRONTAS", label: "40 ITENS" },
    { title: "CHROMA KEYS", label: "360+ ITENS" },
    { title: "MÚSICAS", label: "400+ ITENS" },
    { title: "EFEITOS SONOROS", label: "800+ ITENS" },
    { title: "EMOJIS", label: "250+ ITENS" },
    { title: "LUTS", label: "443+ ITENS" },
    { title: "ITENS KIT YOUTUBER", label: "26+ ITENS" },
    { title: "ITENS FONTES", label: "1300+ ITENS" },
    { title: "ITENS ELEMENTOS", label: "300+ ITENS" },
    { title: "OVERLAYS", label: "120+ ITENS" },
    { title: "SCRIPT AFTER EFFECTS" },
    { title: "IMAGENS PARA VÍDEOS", label: "350+ ITENS"}
  ];
  return (
    <Container backImage={BackgroundImage} id="descricao">
      <Title>
        <p>O que você receberá no</p>
        <span>Strawberry Pack</span>
        <p className="subTitle">4.377 ARQUIVOS!!!</p>
      </Title>
      <Content>
        {items.map((item: any, key: number) => (
          <ContentButton key={key}>
            {item.label ? (
                <>
                    <p>{item.title}</p>
                    {item.subtitle && (
                      <p>{item.subtitle}</p>
                    )}
                    <span>{item.label}</span>
                </>
            ) : (
                <span>{item.title}</span>
            )}
          </ContentButton>
        ))}
      </Content>
    </Container>
  );
}
