import React from "react"
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import * as S from "./style";
import * as Auth from "../start/style";
import { useAtom } from "jotai";
import { authType } from "../../../store/authtype/authtype.atom";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();
    const [AuthValid, setAuthValid] = useAtom(authType);
    const consumerAuth = ()=>{
        setAuthValid((prev)=>!prev);
    }
return(
    <S.login>
    <Auth.main>
        <S.loginText>
                    <h2>반가워요!</h2>
                </S.loginText>
                <S.buttonMain>
                    <S.textFieldWrap>
                        <S.textField placeholder="아이디를 입력해주세요" />
                    </S.textFieldWrap>
                    <S.textFieldWrap >
                        <S.textField type="password" placeholder="비밀번호를 입력해주세요" />
                    </S.textFieldWrap>
                    <S.bottomWarp>
                    <S.startButton onClick={()=>navigate("/home")}>시작</S.startButton>
                    <S.navText>
                        {AuthValid ? <span onClick={consumerAuth}>사용자 로그인 하러 가기</span> : <span onClick={consumerAuth}>지자체 로그인 하러 가기</span>}
                        <span onClick={()=>navigate("/sign/name")}>회원가입 하러 가기</span>
                    </S.navText>
                    </S.bottomWarp>
                    
                </S.buttonMain>
                
                <img src={Polygon}></img>
            </Auth.main>
            <Auth.logoMain>
                <Auth.logo src={logo}>

                </Auth.logo>
            </Auth.logoMain>
    </S.login>
)
}
export default Login