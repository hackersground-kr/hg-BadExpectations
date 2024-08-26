import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { currentUserAtom } from "../../../store/user/user.atom";
import * as S from "./style";
import * as Auth from "../start/style";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";

const Default= () => {
    const navigate = useNavigate();
    const [, setCurrentUser] = useAtom(currentUserAtom);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleNext = () => {
        setCurrentUser((prev) => ({
            ...prev,
            username,
            password
        }));
        navigate("/sign/number");
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
                            placeholder="아이디를 입력해주세요" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </S.textFieldWrap>
                    <S.textFieldWrap>
                        <S.textField 
                            type="password" 
                            placeholder="비밀번호를 입력해주세요" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

export default Default;
