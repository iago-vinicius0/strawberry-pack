import { styled } from "styled-components";

export const Container = styled.div<{backImage: string, backImageMobile: string}>`
    width: 100%;
    height: 800px;
    background-image: url(${(props) => props.backImage});
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid #ff6d71;
    @media (min-width: 0px) and (max-width: 600px) {
        height: 500px;
    }
    @media(min-width: 600px) and (max-width: 840px) {
        height: 700px;
    }
    @media(min-width: 840px) and (max-width: 1000px) {
        height: 800px;
    }
    @media(min-width: 1000px) and (max-width: 1280px) {
        height: 1100px;
    }
    @media(max-width: 1280px) {
        background-image: url(${(props) => props.backImageMobile});
    }
    p {
        margin: 0px
    }
`;