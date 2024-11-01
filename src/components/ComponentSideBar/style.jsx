import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { LuCompass } from "react-icons/lu";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { TbHelpHexagon } from "react-icons/tb";

export const SideBar = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    width: 72px;
    height: 100vh;
    border: 1px solid #e9e7e7;
    left: 0;
    top: 0;
    `;

export const DivIcons = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    top: 20px;
    width: 55px;
    height: 350px;
    gap: 30px
    `;

export const DivHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeHome = styled(BiHomeAlt)`
    width: 25px;
    height: 25px;
`;

export const DivCompass = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeCompass = styled(LuCompass)`
    width: 25px;
    height: 25px;
`;

export const DivPlusSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconePlusSquare = styled(FaRegPlusSquare)`
    width: 20px;
    height: 25px;
`;

export const DivBell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeBell = styled(BiBell)`
    width: 25px;
    height: 25px;
`;

export const DivMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeMessage = styled(AiOutlineMessage)`
    width: 25px;
    height: 25px;
`;


export const DivIconeHexagon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    width: 55px;
    height: 55px;
    top: 225px;
`;

export const DivHexagon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: #e9e7e7;
    }
`;

export const IconeHexagon = styled(TbHelpHexagon)`
    width: 25px;
    height: 25px;
`;