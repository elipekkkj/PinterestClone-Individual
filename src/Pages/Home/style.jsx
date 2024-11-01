import styled from "styled-components";
import { IoLogoPinterest } from "react-icons/io";
import { PiExportBold } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";

export const ContainerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    height: 100vh;
`;

export const DivPerfil = styled.div`
    position: absolute;
    top: 70px;
    right: 0; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 74px); 
    height: calc(53% - 70px); 
    background-color: #ffffff;
`;

export const ImagemPerfil = styled.img`
    border-radius: 60px;
    width: 100px;
    height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
`;


export const NomePerfil = styled.h2`
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;
`;

export const TagPint = styled.p`
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    margin-top: 15px;
`;

export const IconePint = styled(IoLogoPinterest)`
    position: relative;
    width: 18px;
    height: 18px;
    top: 4px;
    right: 3px;
`;

export const Seguidores = styled.span`
    position: relative;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3, ãƒ¡ã‚¤ãƒªã‚ª, Meiryo, ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯, Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
`;

export const DivMensagemSeguir = styled.div`
    position: absolute;
    top: 343px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 74px);
    height: 70px; 
    background-color: #ffffff;
`;

export const DivIconesBotoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 400px;
    height: 55px;
    gap: 20px;
`;

export const DivExport = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 40px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeExport = styled(PiExportBold)`
    position: relative;
    width: 25px;
    height: 25px;
`;

export const BotaoMensagem = styled.button`
    background-color: #e2e2e2;
    border-radius: 30px;
    border: 1px solid #d3d3d38b;
    width: 110px;
    height: 45px;
    color: #000000;
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    }
`;

export const BotaoSeguir = styled.button`
    background-color: #b60000;
    border-radius: 30px;
    border: none;
    width: 110px;
    height: 45px;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    }
`;

export const DivOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 40px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeOption = styled(SlOptions)`
    position: relative;
    width: 25px;
    height: 25px;
`;

export const DivCriadoSalvo = styled.div`
    position: absolute;
    top: 413px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 74px);
    height: 80px; 
    background-color: #ffffff;
    gap: 25px;
    box-shadow: 0 12px 8px rgba(0, 0, 0, 0.1);
`;

export const DivCriados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 60px;
    height: 35px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const TextoCriados = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #3b3b3b;
`;

export const DivSalvos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 55px;
    height: 35px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const TextoSalvos = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #3b3b3b;
`;

export const DivImagens1 = styled.div`
    position: absolute;
    top: 495px;
    right: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 74px); 
    height: 250px; 
    background-color: #4d2424;
`;

