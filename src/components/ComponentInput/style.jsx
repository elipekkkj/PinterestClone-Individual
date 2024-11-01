import styled from "styled-components";

export const StyleInput = styled.input`
    background-color: #ffffff;
    border: 1px solid #e8e8e8;
    color: #e8e8e8;
    border-radius: 15px;
    width: 220px;
    height: 45px;
    padding: 0 10px;

@media (max-width: 1024px) {
        width: 100%;
    }

@media (max-width: 375px) {
        width: 100%; 
    }
`;

export const StyleTextInput = styled.p`
    position: relative;
    font-family: sans-serif;
    font-size: 13px;
    color: #414141;
    left: 8px;
    bottom: 3px;
`;