import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { usersAtom, currentUserAtom } from "../../../store/user/user.atom";
import * as S from "./style";
import * as Auth from "../start/style";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";


const Login = () => {
    const navigate = useNavigate();
    const [userId, setuserId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const userIdw = localStorage.getItem("signupUsername")
        const usePw = localStorage.getItem("signupPassword")

     
        if (userId === userIdw && password === usePw) {
            navigate("/home");   

        }
    };

    return (
        <S.login>
            <Auth.main>
                <S.loginText>
                    <h2>반가워요!</h2>
                </S.loginText>
                <S.buttonMain>
                    <S.textFieldWrap>
                        <S.textField 
                            placeholder="아이디를 입력해주세요" 
                            value={userId}
                            onChange={(e) => setuserId(e.target.value)}
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
                        <S.startButton onClick={handleLogin}>시작</S.startButton>
                        <S.navText>
                            <span onClick={() => navigate("/sign/name")}>회원가입 하러 가기</span>
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

export default Login;
