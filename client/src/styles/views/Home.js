import styled from "styled-components";

export const Article = styled.article`
    padding: 15vh 0 0 0;
    max-width: 1750px;
    margin: auto;
`;
export const Header = styled.header`
    display: flex;
    justify-content: center;
    img {
        width: 90%;
        object-fit: cover;
        max-height: 60vh;
    }
`;

export const Section = styled.section`
    padding-top: 15vh;
    h3 {
        color: #828894;
        margin: 20px;
    }
    hr {
        border: 1px solid #ffffff;
    }
`;

const LessCode = styled.div`
    padding-top: 20px;
    padding-bottom: 5vh;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const SectionImgI = styled(LessCode)`
    div {
        &:nth-child(3) {
            img {
                height: 40vh;
            }
        }
    }
    img {
        width: 90%;
        object-fit: cover;
        height: 50vh;
    }
`;

export const SectionImgII = styled(LessCode)`
    div {
        &:nth-child(3) {
            img {
                height: 40vh;
            }
        }
    }
    img {
        width: 90%;
        object-fit: cover;
        height: 50vh;
    }
`;
