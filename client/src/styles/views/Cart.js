import styled from "styled-components";

export const Article = styled.article`
    padding-top: 15vh;
    img {
        width: 200px;
    }
    button {
        border: 0;
        background-color: #fff;
        cursor: pointer;
    }
`;

export const ShopHeader = styled.header`
    display:flex;
    justify-content:space-around;
    p{
        font-weight:bold;
    }

`

export const ScrollPanel = styled.div`
    overflow-y:scroll;
    height:65vh;

`

export const Context = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    padding:20px;
    img{
        border-radius:5px;
    }
`

export const ContextBox = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    button{
        margin: 0 5px 0 5px;
        background-color:#333;
        color:white;
        width:30px;
        height:30px;
        margin-top:20px;
        border-radius:3px;
        font-weight:bold;
    }
    span {
        padding: 0 10px 0 10px;
        font-weight:lighter;
    }
`

export const ContextRow = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
    align-items:center;
    p{
        font-size:25px;
    }
`

export const ContextDelete = styled.div`
    font-weight: bold;
    font-size: 20px;
`
export const ArticleContext = styled.div`
    padding-top:80px;
    display: flex;
    justify-content: space-around;
    
    a,button{
        background-color: #333;
        color: #ffff;
        text-decoration: none;
        border-radius:5px;
        text-align:center;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    a{
        font-size: 20px;
        padding: 5px 20px 5px 20px;
    }

    button{
        width:120px;
        height:40px;
    }
    `


