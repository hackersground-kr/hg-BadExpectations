import React, { useState } from "react";
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import * as S from "./style";
import * as Auth from "../start/style";
import { useNavigate } from "react-router-dom";

const Number= () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState<string>("");

    const handleSignUp = () => {
        const name = localStorage.getItem("signupName") || "";
        const username = localStorage.getItem("signupUsername") || "";
        const password = localStorage.getItem("signupPassword") || "";

        const newUser = {
            name,
            username,
            password,
            phone
        };

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

    
        navigate("/login");
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
                            placeholder="전화번호를 입력해주세요(010-1230-1230)" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </S.textFieldWrap>
                    <S.bottomWarp>
                        <S.startButton onClick={handleSignUp}>회원가입</S.startButton>
                        <S.navText>
                            <span onClick={() => navigate("/sign")}>로그인 하러 가기</span>
                        </S.navText>
                    </S.bottomWarp>
                </S.buttonMain>
                <img src={Polygon} alt="Polygon"/>
            </Auth.main>
            <Auth.logoMain>
                <Auth.logo src={logo} alt="Logo"/>
            </Auth.logoMain>
        </S.login>
    );
}

export default Number;
