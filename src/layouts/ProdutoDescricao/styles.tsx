import { styled } from "styled-components";

export const Container = styled.div<{ backImage: string }>`
  width: 100%;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid #ff6d71;
  @media(max-width: 1024px) {
    padding-bottom: 20px;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    height: 800px;
  }
`;
export const Title = styled.div`
  color: #fff;
  font-size: 35px;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 10px;
  span {
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    color: #ff6d71;
    text-shadow: 3px 3px 12px #e91e63, -2px 1px 30px #e91e63;
    @media(max-width: 1024px) {
        text-shadow: 2px 2px 30px rgba(233, 30, 99, 0.5),
        -2px 1px 15px rgba(233, 30, 99, 0.8);
    }
  }
  .subTitle {
    font-size: 55px;
    margin-top: 24px;
    font-weight: 600;
    @media(max-width: 400px) {
      font-size: 20px;
    }
  }
  @media (min-width: 0px) and (max-width: 1024px) {
    font-size: 20px;
    span {
      font-size: 40px;
    }
    .subTitle {
      font-size: 35px;
    }
  }
  @media (max-width: 400px) {
    font-size: 18px;
    span {
      font-size: 30px;
    }
    .subTitle {
      font-size: 30px;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  @media (min-width: 0px) and (max-width: 1024px) {
    justify-content: center;
    max-width: 470px;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    max-width: 1000px;
  }
`;
export const ContentButton = styled.div`
  width: calc(50% - 30px);
  height: 80px;
  background-color: #fb4647;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  p {
    font-weight: 600;
    color: #fff;
    font-size: 12px;
  }
  span {
    font-weight: 600;
    color: #fff;
    font-size: 20px;
  }
  @media (min-width: 0px) and (max-width: 355px) {
    text-align: center;
    p {
      font-weight: 600;
      color: #fff;
      font-size: 10px;
    }
    span {
      font-weight: 600;
      color: #fff;
      font-size: 10px;
    }
  }
  @media (min-width: 0px) and (max-width: 1024px) {
    text-align: center;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    width: 315px;
    height: 90px;
    p {
      font-size: 16px;
    }
    span {
      font-size: 25px;
    }
  }
`;
