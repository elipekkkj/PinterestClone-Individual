import styled from "styled-components";
import imagemfundo from '../../assets/FundoTelaLogin.png'

export const TelaFundo = styled.div`
    background-image: url(${imagemfundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
`;

    export const SombreamentoFundo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100vh;
    opacity: 0.4;
`;

    export const ContainerLogin = styled.div`
    position: relative;
    background-color: transparent;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

    export const CartaoLogin = styled.div`
    position: relative;
    background-color: #fff;
    width: 440px;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
`;

    export const ImagemPint = styled.img`
    position: relative;
    height: 40px;
    bottom: 20px;
`;

    export const TituloLogin = styled.p`
    position: relative;
    font-size: 30px;
    font-family:'Trebuchet MS';
    color: rgb(51, 51, 51);
    text-align: center;
    bottom: 15px;
    letter-spacing: -1.25px;
`;

    export const CartaoInput = styled.div`
    position: relative;
    background-color: #ffffff;
    width: 80%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    bottom: 10px;
`;

    export const TextoEsqueciASenha = styled.p`
    position: relative;
    color: #181515;
    font-family: sans-serif;
    font-size: 12px;
    text-decoration: none;
    padding: 0 6px;
    right: 60px;
    bottom: 7px;
    
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

    export const CartaoButton = styled.div`
    position: relative;
    background-color: #ffffff;
    width: 80%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    top:5px
`;

    export const ImagemFacebook = styled.img`
    position: relative;
    right: 10px;
    height: 22px;
`;

    export const ImagemGoogle = styled.img`
    position: relative;
    right: 16px;
    height: 15px;
`;

    export const TextoButton = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
`;

    export const CartaoTermos = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #ffffff;
    width: 70%;
    height: 40px;
    color: #acacac;
    font-size: 11px;
    font-family: sans-serif;
    top: 20px;
    gap: 2px;
`;

    export const StyleA = styled.a`
    color: rgb(24, 21, 21);
    text-decoration: none;
    padding: 0 6px;
    
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

    export const BarraTermos = styled.p`
    position: relative;
    background-color: #e4e4e4;
    width: 110px;
    height: 1px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    top: 30px;
`;

    export const CartaoCriarConta = styled.p`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #ffffff;
    width: 80%;
    height: 50px;
    color: #acacac;
    font-size: 11px;
    font-family: sans-serif;
    top: 30px;
    gap: 10px;
`;
