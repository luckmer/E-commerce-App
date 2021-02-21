import styled from "styled-components";

export const Container = styled.article`
    padding: 15vh 0 0 0;
    max-width:1750px;
    margin:auto;
`;
export const Context = styled.div`
padding: 2px 2px 2px;
display: flex;
justify-content: space-around;
flex-flow: row wrap;
`;

export const CardData = styled.div`
    width:100%;
    font-size:18px;
    margin-left:5px;
`

export const Card = styled.div`

    @media screen and (min-width : 600px){
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        img {
            border-radius: 5px;
            max-width: 400px;
            height: 600px;
            display: block;
            object-fit: cover;
        }
    }
    @media (max-width: 600px) {
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:10px;
        img {
            width:100%;
            height: 400px;
            object-fit: cover;
            display: block;
            border-radius:5px;
        }
    }
`;
export const Hide = styled.div`
    button {
        margin: 2vh 2vh 2vh 2vw;
        background-color: #333;
        border: 0;
        z-index:999;
        color: white;
        width: 10em;
        height: 3em;
        font-weight: bold;
        opacity: 0;
    }
    &:hover {
        background-color: #333;
        img {
            opacity: 0.5;
        }
        button {
            opacity: 1;
        }
    }
`;
export const DivHide = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Search = styled.div`
display: flex;
@media screen and (min-width: 600px){
    opacity: ${({ page }) => (page >= 2 ? 0 : 1)};
    div{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label{
        margin:2px;
        align-self: baseline;
        margin-left:60px;
        color:#828894;
    }
    justify-content: center;
    margin:auto;
    input,select{
        width:80%;
        padding:3px;
        height:40px;
        font-size:13px;
        margin-bottom:30px;
        border:0;
        background-color:#FAFAFA;
    }
}

@media screen and (max-width: 600px){
    flex-direction: column;
    label{
        margin:2px;
        align-self: baseline;
        margin-left:12px;
        color:#828894;
    }
    div{
        width:100%;
        display:flex;
        flex-direction: column;
        input,select{
            width:90%;
            margin:auto;
            height:40px;
            font-size:13px;
            margin-bottom:30px;
            border:0;
            background-color:#FAFAFA;
        }
    }
}


`