import { styled } from "styled-components";

export const Container = styled.div<{ backImage: string }>`
  width: 100%;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #ff6d71;
  @media(max-width: 450px) {
    height: 100px;
  }
  @media(min-width: 450px) and (max-width: 650px) {
    height: 150px;
  }
  @media(min-width: 650px) and (max-width: 950px) {
    height: 200px;
  }
  @media(min-width: 950px) and (max-width: 1280px) {
    height: 300px;
  }
  @media(min-width: 1280px) and (max-width: 1520px) {
    height: 400px;
  }
  @media(min-width: 1520px) and (max-width: 1920px) {
    height: 500px;
  }
`;