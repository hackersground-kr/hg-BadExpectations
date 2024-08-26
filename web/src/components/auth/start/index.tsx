import React, { useState } from "react";
import * as S from "./style";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";
import { authType } from "../../../store/authtype/authtype.atom";
import onBoding from "../../../assets/onBoding.svg";
import mouth from "../../../assets/mouth.svg";

const Auth = ()=>{
    const navigate = useNavigate();
    const [onBoarding, setOnBoarding] = useState(true);
    const [, setAuthValid] = useAtom(authType);
    if(onBoarding){
        setTimeout(function(){
            setOnBoarding(false);
        }, 2000);

    }

    const consumerAuth = ()=>{
        setAuthValid(true);
        navigate("/login");
    }
    const guideAuth = ()=>{
        setAuthValid(false);
        navigate("/login");

    }
    return(
        <>
        {onBoarding ? 
            <S.onBordingSrceen>
                <S.Logo>
                    <img src={onBoding} alt="" />
                    <S.mouthImg src={mouth} alt="" />
                </S.Logo>
            </S.onBordingSrceen> : 
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
        }
        </>

    )

}

export default Auth;