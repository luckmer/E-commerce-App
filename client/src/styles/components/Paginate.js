import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 600px){
        button {
            background-color:#F3F3F3;
            font-size:15px;
            border:1px solid black;
            border-radius:100px;
            color: #333;
            cursor: pointer;
            padding: 0.7vh 1.4vw 0.7vh 1.4vw;
            
            margin: 20px 3px 20px 3px;
        }
    }

    @media screen and (max-width: 600px){
        button {
            background-color:#F3F3F3;
            font-size:15px;
            border:1px solid black;
            border-radius:100px;
            color: #333;
            cursor: pointer;
            padding: 5px 20px ;
            margin: 20px 3px 20px 3px;
            
        }
    }
`;