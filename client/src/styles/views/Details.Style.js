import styled from "styled-components";

export const Article = styled.article`
    padding-top: 15vh;
`;

export const Grid = styled.div`
    display: flex;
    max-width: 1800px;
    margin: auto;
    @media screen and (max-width: 600px){
        flex-direction:column;
    }
`;

export const GridDiv = styled.div`
    h1 {
        font-family: Ubuntu;
        font-style: bold;
        font-weight: bold;
        font-size: 40px;
    }
    p {
        color: #828894;
    }   
    @media screen and (min-width : 600px){
        img {
            border-radius: 5px;
            width: 100%;
            height: 600px;
            display: block;
            object-fit: cover;
        }
        width: 49.56vw;
    }

    @media screen and (max-width : 600px){
        img{
            width:100%;
            object-fit:cover;
            height:100%;
        }
    }
`;

export const Description = styled.footer`
    @media screen and (min-width: 600px){
        width:70%;
        padding-top:80px;
        padding-bottom:10px;
    }

    @media screen and (max-width: 600px){
        padding : 80px 5px 10px 5px;
        max-width:90%;
        margin:auto;
    }
    `

export const Margin = styled.div`
    @media screen and (min-width: 600px){
        margin-left: 50px;
        height:100%;
    }
`;

export const Context = styled.div`
    padding-top:5em;
    display:flex;
    width:100%;
    flex-direction:column;    
    hr{
        border: 1px solid white;
    }
    h1{
        padding:10px;
        margin-bottom:10px;
    }
    p{
        margin-left:40px;
        margin-bottom:20px;
        max-width: 70%;
        color:#828894;
    }
    @media screen and (max-width: 600px){
    }
`

export const GridContext = styled.div`
padding: 2px 2px 2px;
display: flex;
justify-content: space-around;
flex-flow: row wrap;
`


export const BuyPanel = styled.div`
    @media screen and (min-width: 600px){
        button{
            border:0;
            background-color:#000000;
            width: 125px;
            height: 43px;
            color:#ffff;
            cursor:pointer;
        }
    }

    @media screen and (max-width: 600px){
        max-width:90%;
        margin:auto;
        button{
            border:0;
            height: 40px;
            background-color:#000000;
            width:100%;
            color:#ffff;
            cursor:pointer;
        }
    }

`
export const Text = styled.div`
    @media screen and (min-width: 600px){
        h1{
        background-color:#000000;
        color:#ffff;
        cursor:pointer;
        width:200px;
        text-align:center;
        padding:10px 5px 10px 5px;
        }
    }
    @media screen and (max-width: 600px){
        h1{
            background-color:#000000;
            color:#ffff;
            max-width:90%;
            margin-auto;
            margin-left:10px;
            cursor:pointer;
            text-align:center;
            padding:10px 5px 10px 5px;
        }
    }
    
`

export const NexProducts = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    img{
        
        border-radius: 5px;
        max-width: 400px;
        height: 600px;
        display: block;
        object-fit: cover;
    }


`
