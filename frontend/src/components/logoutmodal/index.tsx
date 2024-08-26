import React from "react";
import * as S from "./style";
import LogooutLogo from "../../assets/logooutLogo.svg";
import { useNavigate } from "react-router-dom";

interface LogoutModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal = ({ setModal }:LogoutModalProps) => {
    const navigate = useNavigate();
    const handleClose = () => {
        setModal(false); 
    };
    const logout = ()=>{
        navigate("/sign");
        setModal(false); 
    }

    return (
        <S.outmain>
            <S.group>
                <S.logoImg src={LogooutLogo} alt="Logout Logo" />
                <S.selectGroup>
                    <S.selectButton onClick={logout}>네</S.selectButton>
                    <S.selectButtonSec onClick={handleClose}>아니요</S.selectButtonSec>
                </S.selectGroup>
            </S.group>
        </S.outmain>
    );
}

export default LogoutModal;
