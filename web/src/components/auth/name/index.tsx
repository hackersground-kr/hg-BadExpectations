import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { currentUserAtom } from "../../../store/user/user.atom";
import * as S from "./style";
import * as Auth from "../start/style";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";

const Name= () => {
    const navigate = useNavigate();
    const [, setCurrentUser] = useAtom(currentUserAtom);
    const [name, setName] = useState("");

    const handleNext = () => {
        setCurrentUser((prev) => ({
            ...prev,
            name
        }));
        navigate("/signup");
    };

    return (
        <S.login>
            <Auth.main>
                <Auth.loginText>
                    <h2>안녕하세요</h2>
                </Auth.loginText>
                <S.buttonMain>
                    <S.textFieldWrap>
                        <S.textField 
                            placeholder="이름을 입력해주세요" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </S.textFieldWrap>
                    <S.bottomWarp>
                        <S.startButton onClick={handleNext}>다음</S.startButton>
                        <S.navText>
                            <span onClick={() => navigate("/sign")}>로그인 하러 가기</span>
                        </S.navText>
                    </S.bottomWarp>
                </S.buttonMain>
                <img src={Polygon} alt="Polygon" />
            </Auth.main>
            <Auth.logoMain>
                <Auth.logo src={logo} alt="Logo" />
            </Auth.logoMain>
        </S.login>
    );
};

export default Name;
