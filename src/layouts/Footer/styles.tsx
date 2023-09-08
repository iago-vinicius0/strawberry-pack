import { styled } from "styled-components";

export const Container = styled.div<{backImage: string}>`
    width: 100%;
    height: 220px;
    color: #FFF;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${(props) => props.backImage});
    background-size: cover;
    background-position: center;
    @media(max-width: 400px) {
        gap: 10px;
        h1 {
            font-size: 18px;
        }
        p {
            font-size: 16px;
        }
        a {
            font-size: 14px;
        }
        img {
            width: 35px;
            height: 35px
        }
    }
    @media(min-width: 400px) and (max-width: 1024px) {
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 18px;
        }
        a {
            font-size: 16px;
        }
    }
    @media(max-width: 1024px) {
        text-align: center;
    }
`;
export const EmailBox = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-right: 10px;
    }
    a {
        color: #FFF;
    }
`;