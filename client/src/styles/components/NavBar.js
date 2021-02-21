import styled from "styled-components";


export const Nav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    border-bottom: 1px solid #DDDD;
    text-decoration: none;
`;
export const Header = styled.header`
    padding: 2vh 5vw 2vh 5vw;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    ul {
        padding: 0 2vw 0 2vw;
        margin: 1vh 0 1vh 0;
        list-style: none;
    }
    a {
        text-decoration: none;
        font-weight: lighter;
        color: ${({ scroll }) => (scroll ? "grey" : "#444")};
    }
    li {
        cursor:pointer;
        margin: 5px 0 5px 0;
    }
    @media (max-width: 850px) {
        padding: 4vh 4vw 4vh 4vw;
        font-size: 16px;
        position: fixed;
        transform: ${({ state }) =>
            state ? "translateX(0)" : "translateX(-100%)"};
        background-color: #dddddd;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: transform 0.3s ease-in-out;
        a {
            font-family: "Maragsa";
            text-decoration: none;
            font-weight: bold;
            color: #10182f;
        }
    }
`;
export const Menu = styled.div`
    display: none;
    @media (max-width: 850px) {
        z-index: 999;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-flow: column;
        width: 2rem;
        height: 3rem;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 999;
        div {
            background-color: ${({ state }) =>
                state ? "#10182F" : " #10182F"};
            width: 20px;
            height: 3px;
            transition: all 1s ease;
        }
        & div:nth-child(1) {
            transform: rotate(${({ state }) => (state ? "90deg" : "0")});
        }
        & div:nth-child(2) {
            transform: rotate(${({ state }) => (state ? "-90deg" : "0")});
        }
    }
`;

export const DivPage = styled.div`
    display: flex;
    justify-content: center;
    &:nth-child(3){
        justify-content: flex-end;
    }
    width: 100%;
    @media (max-width: 850px) {
        padding: 20px 0 0 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;
