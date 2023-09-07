import { styled } from "styled-components";

export const Container = styled.div<{ backImage: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ff6d71;
  background-image: url("${(props) => props.backImage}");
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    align-items: center;
    padding-bottom: 20px;
  }
  .my-class {
    background-color: blue;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0px;
    }
  }
  * {
    &:nth-child(2) {
      justify-content: center;
    }
    &:nth-child(3) {
      justify-content: center;
    }
  }
`;
export const ApresentationContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    gap: 50px;
    padding: 20px;
  }
`;
export const VideoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media(max-width: 600px) {
    width: 95%;
    iframe {
      height: 250px;
      width: 100%;
    }
  }
  @media (min-width: 0px) and (max-width: 1024px) {
    iframe {
      margin: 10px 0px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1100px) {
    iframe {
      padding-left: 20px;
      width: 100%;
    }
  }
  @media (min-width: 1500px) and (max-width: 1920px) {
    iframe {
      width: 700px;
      height: 400px;
    }
  }
`;
export const ApenasUmClick = styled.div<{ backImage: string }>`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 600px) {
    img {
      width: 95%;
    }
  }
  @media (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
    height: 90%;
    max-width: 500px;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 100%;
    max-height: 500px;
  }
`;
export const VideoTitle = styled.div`
  color: #ff6d71;
  text-shadow: 3px 3px 6px #e91e63, -2px 1px 15px #e91e63;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  margin: 30px 0px;
  @media (max-width: 1024px) {
    text-shadow: 2px 2px 30px rgba(233, 30, 99, 0.5),
      -2px 1px 15px rgba(233, 30, 99, 0.8);
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    font-size: 30px;
    text-align: center;
    width: 50%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin: 15px 0px;
  }
`;

export const ApresentationText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 28px;
  margin: 25px 0px;
  padding: 0px 10px;
  font-weight: 500;
  .green {
    color: #0f0;
    text-shadow: 3px 3px 6px #090, -2px 1px 15px #090;
  }
  .red {
    color: #ff6d71;
    text-shadow: 3px 3px 6px #e91e63, -2px 1px 15px #e91e63;
  }
  .red-grifado {
    color: #ff6d71;
    border-bottom: 2px solid #ff6d71;
    text-shadow: 3px 3px 6px #e91e63, -2px 1px 15px #e91e63;
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
  @media (min-width: 450px) and (max-width: 600px) {
    font-size: 15px;
  }
  @media (min-width: 600px) and (max-width: 850px) {
    font-size: 18px;
  }
  @media (min-width: 850px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 23px;
  }
`;
