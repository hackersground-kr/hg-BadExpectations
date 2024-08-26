import React from "react";
import * as S from "./style";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authType } from "../../../store/authtype/authtype.atom";

const Auth = ()=>{
    const navigate = useNavigate();
    const [, setAuthValid] = useAtom(authType);
const consumerAuth = ()=>{
    setAuthValid(true);
    navigate("/login");
}
const guideAuth = ()=>{
    setAuthValid(false);
    navigate("/login");
}

    return(
        <S.auth>
            <S.main>
                <S.loginText>
                    <h2>역활 선택하기</h2>
                </S.loginText>
                <S.buttonMain>
                    <S.userButton onClick={consumerAuth}>
                        <p>사용자</p>
                    </S.userButton>
                    <S.userButton onClick={guideAuth}>
                    <p>여행 진행자</p>
                    </S.userButton>
                </S.buttonMain>
                
                <img src={Polygon}></img>
            </S.main>
            <S.logoMain>
                <S.logo src={logo}>

                </S.logo>
            </S.logoMain>
            
        </S.auth>
    )
}
export default Auth;