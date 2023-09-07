import { styled } from "styled-components";

export const Container = styled.div<{ backImage: string }>`
  width: 100%;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ff6d71;
  @media(max-width: 1024px) {
    padding: 20px 0px;
  }
  @media(min-width: 1280px) and (max-width: 1920px) {
    height: 700px;
  }
`;
export const Banner = styled.div<{ backImage: string, backImageMobile: string }>`
  width: 600px;
  height: 600px;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 10px;
  gap: 10px;
  margin: 20px;
  p {
    color: #666;
  }
  @media(max-width: 650px) {
    max-width: 400px;
    height: 650px;
    margin: 10px;
    background-image: url(${(props) => props.backImageMobile});
  }
  @media(max-width: 400px) {
    max-width: 300px;
    height: 500px;
  }
`;
export const BannerButton = styled.button`
  width: 400px;
  height: 80px;
  background-color: #ff6d71;
  border-radius: 10px;
  font-size: 35px;
  font-weight: 600;
  border: none;
  a {
    text-decoration: none;
    color: #FFF;
  }
  &:hover {
    cursor: pointer;
    background-color: #fb4647;
  }
  @media(max-width: 1024px) {
    width: 90%;
    font-size: 2em;
  }
  @media(max-width: 650px) {
    font-size: 1.5em;
  }
`;