import { styled } from "styled-components";

export const Container = styled.div<{ backImage: string }>`
  width: 100%;
  padding-bottom: 30px;
  @media (min-width: 0px) and (max-width: 1024px) {
    gap: 25px;
  }
  @media (min-width: 1280px) and (max-width: 1920px) {
    gap: 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #ff6d71;
  p {
    margin: 0px;
  }
`;
export const Title = styled.div`
  margin-bottom: 25px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  .red {
    color: #ff6d71;
    text-shadow: 3px 3px 12px #e91e63, -2px 1px 30px #e91e63;
    @media (max-width: 1024px) {
      text-shadow: 2px 2px 20px rgba(233, 30, 99, 0.5),
        -2px 1px 12px rgba(233, 30, 99, 0.8);
    }
  }
  @media (max-width: 1920px) {
    font-size: 80px;
  }
  @media(max-width: 1280px) {
    font-size: 60px;
  }
  @media(max-width: 910px) {
    font-size: 50px;
  }
  @media(max-width: 710px) {
    font-size: 40px;
  }
  @media(max-width: 570px) {
    font-size: 30px;
  }
  @media(max-width: 430px) {
    font-size: 20px;
  }
  `;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  @media(max-width: 1200px) {
    width: 150px;
  }
  @media(max-width: 910px) {
    margin-bottom: 35px;
  }
  @media(max-width: 470px) {
    width: 100px;
  }
`;
export const ImagesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 1200px;
  img {
    border-radius: 50%;
    margin-bottom: 16px;
  }
  p {
    font-size: 26px;
    text-align: center;
    font-weight: 600;
    color: #fff;
  }
  span {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: #fff;
  }
  @media(max-width: 1200px) {
    max-width: 1000px;
    img {
      width: 130px;
      height: 130px;
    }
  }
  @media(max-width: 910px) {
    max-width: 800px;
    gap: 25%;
    img {
      width: 200px;
      height: 200px;
    }
  }
  @media(max-width: 470px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
  @media(max-width: 360px) {
    p {
      font-size: 18px;
    }
    span {
      font-size: 15px;
    }
    img {
      width: 120px;
      height: 120px;
    }
  }
`;
