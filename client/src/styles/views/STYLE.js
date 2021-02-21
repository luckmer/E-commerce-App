import styled from "styled-components";

export const Article = styled.article `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 500px;
    margin: auto;
    color: #444;
`

export const Header = styled.header`
    font-weight:bold;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 20px 0;
    letter-spacing: 1.5px;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    input{
        width: 100%;
        height: 45px;
        margin: 10px 0;
        border:0;
        background-color:#FAFAFA;
        border:1px solid #DDDDDD;
        outline: none;
        padding: 0 10px;
        color:#333;

    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: flex-start;

    button{
        cursor:pointer;
        width: 150px;
        padding: 10px 0;
        color: #fff;
        background: #000;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-right: 10px;
        border:0;
    }
    a{
        color: #dc143c;
        text-decoration: none;
        font-weight:600;
    }
`
export const Footer = styled.footer`
    padding-top:60px;
    display:flex;
    p,a{
        margin-right:10px;
    }
    a{
        color:#538DFF;
        font-weight:bold;
        text-decoration:none;
        cursor:pointer;
    }
`

export const Information = styled.div`
    padding: 10px 0 10px 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    margin-bottom: 15px;
    h1{
        padding-left: 20px;
    }
`