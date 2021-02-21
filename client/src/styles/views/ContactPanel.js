import styled from "styled-components";


export const Section = styled.section`
margin-top:4em;
max-width: 1750px;
margin: auto;
header{
    font-size:30px;
    color:#000;
}
    @media screen and (min-width: 600px){

        div{
            text-align: initial;
            padding:12px;
            width:100%;
            color:#828894;
        }
        
        ul {
            padding: 20px 0 0 0;
            list-style: none;
            text-align: center;
        }
    }
    @media screen and (max-width: 600px){
        div{
            margin:20px;
            list-style: none;
        }
    }

`

export const Grid = styled.div`
    @media screen and (min-width: 600px){
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 20vh;
    }
`