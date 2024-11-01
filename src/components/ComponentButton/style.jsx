import styled from "styled-components";

export const BotaoEntrar = styled.button`
    background-color: #e60023;
    border-radius: 30px;
    width: 240px;
    height: 39px;
    border: none;
    color: #fff;
    font-size: 8px;
    font-family: sans-serif;
    transition: box-shadow 0.3s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
`;

export const BotaoFacebook = styled.button`
    background-color: #0077ff;
    border-radius: 30px;
    width: 240px;
    height: 35px;
    border: none;
    color: #fff;
    font-size: 9px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
`;

export const BotaoGoogle = styled.button`
    background-color: #ffffff;
    border-radius: 30px;
    border: 1px solid #d3d3d38b;
    width: 240px;
    height: 35px;
    color: #666666;
    font-size: 9px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
`;

export const BotaoCriarConta = styled.button`
    position: absolute;

    top:50px;
    left: 20px;
    background-color: #ffffff;
    border-radius: 30px;
    border: none;
    width: 90px;
    height: 35px;
    color: #111111;
    font-family: sans-serif;
    font-size: 11px;
    letter-spacing: 0.45px;
    transition: box-shadow 0.5s ease;

    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;