import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export const CartaoInput = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: calc(100% - 74px);
    height: 70px;
    left: 74px;
`;

export const InputPesquisar = styled.input`
    position: relative;
    background-color: rgb(221, 221, 221);
    border: none;
    color: #999898;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 15px;
    width: 83%;
    height: 50px;
    padding: 0 40px;
    top: 2px;
    left: 20px;
`;

export const IconeLupa = styled(FaMagnifyingGlass)`
    position: absolute;
    left: 34px;
    top: 37px; 
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    color: #a5a5a5;
`;

export const DivUsuario = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    top: 2px;
    background-color: transparent;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeUsuario = styled(FaCircleUser)`
    color: #d8d8d8;
    width: 30px;
    height: 30px;
`;

export const DivSeta = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 35px;
    top: 2px;
    right: 30px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeSeta = styled(IoIosArrowDown)`
    color: #c5c5c5;
    width: 20px;
    height: 20px;
`;
